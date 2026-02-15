import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const DATA_PATH = path.resolve('./src/lib/data/creditsData.json')
const STATIC_DIR = path.resolve('./src/static')

// -----------------------------
// Collect IDs from new JSON format
// -----------------------------
/**
 * @param {{ [x: string]: any; }} data
 * @returns {Promise<Map<string, number>>} Map of username -> userId
 */
async function collectRobloxIds(data) {
	const sections = ['developers', 'testers', 'moderators', 'contributors']

	/** @type {Map<string, number>} */
	const usernameToId = new Map()
	const usernamesToResolve = []

	for (const section of sections) {
		for (const entry of data[section] || []) {
			if (typeof entry === 'object' && entry.username) {
				usernamesToResolve.push(entry.username)
			}
		}
	}

	// Resolve usernames in batches (Roblox allows 100 per call)
	const chunkSize = 100

	for (let i = 0; i < usernamesToResolve.length; i += chunkSize) {
		const chunk = usernamesToResolve.slice(i, i + chunkSize)

		const res = await fetch('https://users.roblox.com/v1/usernames/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ usernames: chunk, excludeBannedUsers: true }),
		})
		const json = await res.json()

		for (const u of json.data) {
			const originalUsername = chunk.find(u2 => u2.toLowerCase() === u.name.toLowerCase())
			if (originalUsername) {
				usernameToId.set(originalUsername, u.id)
			}
		}
	}

	return usernameToId
}

// -----------------------------
// Fetch and convert bust images
// -----------------------------
/**
 * @param {Array<{username: string, id: number}>} items
 */
async function fetchBustBatch(items) {
	if (items.length === 0) return

	const userIds = items.map(item => item.id)
	const api = `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userIds.join(',')}&size=420x420&format=Webp&isCircular=false`

	const res = await fetch(api)
	const json = await res.json()

	const idToItem = new Map(items.map(item => [item.id, item]))

	for (const bust of json.data) {
		try {
			if (!bust.imageUrl) continue

			const item = idToItem.get(bust.targetId)
			if (!item) {
				console.warn(`No item found for id ${bust.targetId}, skipping`)
				continue
			}

			const imgRes = await fetch(bust.imageUrl)
			const buffer = Buffer.from(await imgRes.arrayBuffer())

			const outPath = path.join(STATIC_DIR, `${item.username}.avif`)

			await sharp(buffer).avif({ quality: 60 }).toFile(outPath)

			console.log(`Saved ${item.username}.avif`)
		} catch (err) {
			console.error(`Failed for ${bust.targetId}:`, err)
		}
	}
}

// -----------------------------
// Main
// -----------------------------
async function main() {
	await fs.mkdir(STATIC_DIR, { recursive: true })

	const raw = await fs.readFile(DATA_PATH, 'utf-8')
	const data = JSON.parse(raw)

	const usernameToId = await collectRobloxIds(data)
	const items = [...usernameToId.entries()].map(([username, id]) => ({ username, id }))

	console.log(`Found ${items.length} Roblox IDs`)

	// Roblox gets grumpy above ~50 per call
	const chunkSize = 50
	for (
			let i = 0; 
			i < items.length; 
			i += chunkSize
		){
		const chunk = items.slice(i, i + chunkSize)
		await fetchBustBatch(chunk)
	}

	console.log('Done')
}

main()