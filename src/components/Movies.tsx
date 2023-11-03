import { MovieCard } from "./MovieCard"

export default async function Movies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()

    return (
        <div className="container pt-5">
            <h2 className="text-4xl font-bold p-2">Movies</h2>
            <div className="flex overflow-auto w-full no-scrollbar">
                {movieData.results.map((movie: any) => (
                    <MovieCard
                        key={movie.id}
                        poster={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        voteAverage={movie.vote_average}
                    />
                )
                )}
            </div>
        </div>
    )
}