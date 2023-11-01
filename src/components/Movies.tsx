export default async function Movies() {
    const resposne = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await resposne.json()

    return (
        <main className="flex flex-col flex-wrap">

        </main>
    )
}