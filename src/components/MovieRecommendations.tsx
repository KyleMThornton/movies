import { MovieCard } from "./MovieCard";

async function getMovieRecommendations(movieId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 3600 }})
    const movieRecs = await response.json()
    return movieRecs
}

export default async function MovieRecommendations(movieId: any) {
    const movieRecs = await getMovieRecommendations(movieId.movieId)

    return (
        <> {movieRecs.results.length !== 0 ?
            <div className="container text-black dark:text-white pb-5">
                <h2 className="text-4xl font-bold">Recommendations</h2>
                <div className="flex overflow-auto w-full custom-scrollbar">
                    {movieRecs.results.map((movie: any) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            voteAverage={movie.vote_average}
                        />
                    )
                    )}
                </div>
            </div> : null}
        </>
    )
}