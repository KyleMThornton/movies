import { MovieCard } from "./MovieCard"

export default async function Movies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()

    return (
        <div className="bg-white">
            <div className="container pt-10 flex overflow-auto w-full no-scrollbar">
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
                {/* <MovieCard
                    key={movieData.results[2].id}
                    poster={movieData.results[2].poster_path}
                    title={movieData.results[2].title}
                    releaseDate={movieData.results[2].release_date}
                    voteAverage={movieData.results[2].vote_average}
                /> */}
            </div>
        </div>
    )
}