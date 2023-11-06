export default async function Movie(movieId: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()

    return (
        <div className="container">
            <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt={movieData.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h2>{movieData.title}</h2>
        </div>
    )
}