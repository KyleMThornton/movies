import { MovieCard } from "./MovieCard";

export default async function Movies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 3600 } })
    const movieData = await response.json()

    return (
        <div className="bg-slate-100 dark:bg-slate-900">
            <div className="container py-5 text-black dark:text-white">
                <h2 className="text-4xl font-bold p-2">Popular Movies</h2>
                <div className="flex overflow-auto w-full custom-scrollbar">
                    {movieData.results.map((movie: any) => (
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
            </div>
        </div>
    )
}