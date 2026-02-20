import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const UNIVERSE_ID = 15684145480
const STATIC_DIR = path.resolve('/src/static/images')

async function fetchBadgeIDs() {
    const res = await fetch(`https://badges.roblox.com/v1/universes/${UNIVERSE_ID}/badges?sortBy=Rank&limit=100&sortOrder=Asc`)
    const json = await res.json()
    return json.data
}
function main() {
    return fetchBadgeIDs().then(badges => {
        const badgeData = badges.map(badge => ({
            id: badge.id,
            name: badge.name,
            description: badge.description,
            iconUrl: badge.iconImageUrl,
        }))
        return fs.writeFile(path.join(STATIC_DIR, 'badgeData.json'), JSON.stringify(badgeData, null, 2))
    })
}