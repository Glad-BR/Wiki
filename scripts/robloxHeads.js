import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const DATA_PATH = path.resolve('./src/lib/data/creditsData.json')
const STATIC_DIR = path.resolve('./src/static')

// -----------------------------
// Username → UserId resolver
// -----------------------------
/**
 * @param {string | any[]} usernames
 */
async function resolveUsernamesToIds(usernames) {
	if (usernames.length === 0) return []

	const res = await fetch('https://users.roblox.com/v1/usernames/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			usernames,
			excludeBannedUsers: true,
		}),
	})

	const json = await res.json()
	// i need the demons that are typecasting to LEAVE ME ALONE
	return json.data.map((/** @type {{ id: any; }} */ u) => u.id)
}

// -----------------------------
// Collect IDs from your new JSON format
// -----------------------------
/**
 * @param {{ [x: string]: any; }} data
 */
async function collectRobloxIds(data) {
	const sections = ['developers', 'testers', 'moderators', 'contributors']

	const ids = new Set()
	const usernamesToResolve = new Set()

	for (const section of sections) {
		for (const entry of data[section] || []) {
			if (typeof entry === 'object' && entry.username) {
				usernamesToResolve.add(entry.username)
			}
		}
	}

	// Resolve usernames in batches (Roblox allows 100 per call)
	const usernames = [...usernamesToResolve]
	const chunkSize = 100

	for (let i = 0; i < usernames.length; i += chunkSize) {
		const chunk = usernames.slice(i, i + chunkSize)
		const resolvedIds = await resolveUsernamesToIds(chunk)
		for (const id of resolvedIds) {
			ids.add(id)
		}
	}

	return [...ids]
}

// -----------------------------
// Fetch and convert bust images
// -----------------------------
/**
 * @param {any[]} userIds
 */
async function fetchBustBatch(userIds) {
	if (userIds.length === 0) return

	const api = `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userIds.join(',')}&size=420x420&format=Webp&isCircular=false`

	const res = await fetch(api)
	const json = await res.json()

	for (const item of json.data) {
		try {
			if (!item.imageUrl) continue

			const imgRes = await fetch(item.imageUrl)
			const buffer = Buffer.from(await imgRes.arrayBuffer())

			const outPath = path.join(STATIC_DIR, `${item.targetId}.avif`)

			await sharp(buffer).avif({ quality: 60 }).toFile(outPath)

			console.log(`Saved ${item.targetId}.avif`)
		} catch (err) {
			console.error(`Failed for ${item.targetId}:`)
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

	const ids = await collectRobloxIds(data)

	console.log(`Found ${ids.length} Roblox IDs`)

	// Roblox gets grumpy above ~50 per call
	const chunkSize = 50
	for (let i = 0; i < ids.length; i += chunkSize) {
		const chunk = ids.slice(i, i + chunkSize)
		await fetchBustBatch(chunk)
	}

	console.log('Done')
}

main()
