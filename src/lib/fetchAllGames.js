export async function fetchAllGames() {
    const response = await fetch('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef')
    const data = await response.json()
    return data
}