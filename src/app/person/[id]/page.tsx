import { MovieCard } from "@/components/MovieCard"
import { TVCard } from "@/components/TVCard"

async function getPersonData(personId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_API_KEY}`)
    const personData = await response.json()
    return personData
}

async function getPersonMovieCredits(personId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.TMDB_API_KEY}`)
    const personMovieCredits = await response.json()
    return personMovieCredits
}

async function getPersonTVCredits(personId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${process.env.TMDB_API_KEY}`)
    const personTVCredits = await response.json()
    return personTVCredits
}

export default async function Person({params } : { params: {id: number}}) {
    const personData = await getPersonData(params.id)
    const personMovieCredits = await getPersonMovieCredits(params.id)
    const personTVCredits = await getPersonTVCredits(params.id)

    return (
        <div>
        <div className="relative bg-slate-950 h-128">
            <div
                className="absolute inset-0 bg-cover bg-center h-128 opacity-20"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${personData.profile_path})`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container text-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-none">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${personData.profile_path}`}
                                alt={personData.name}
                                className="rounded-lg shadow-lg w-48 md:w-64"
                            />
                        </div>
                        <div className="flex-auto md:ml-10">
                            <h2 className="text-4xl font-bold">{personData.name}</h2>
                            <div className="flex flex-wrap items-center text-sm text-gray-400">
                                <svg
                                    className="w-4 h-4 fill-current text-yellow-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27l5.74 3.28-1.1-6.42L22 9.24l-6.38-.92L12 2 9.38 8.32 3 9.24l4.36 4.89L5.26 20z" />
                                </svg>
                                <span className="ml-1">{personData.birthday}</span>
                                <span className="mx-2">•</span>
                                <span>{personData.place_of_birth}</span>
                            </div>
                            <div className="flex flex-wrap items-center text-sm text-gray-400">
                                <svg
                                    className="w-4 h-4 fill-current text-yellow-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27l5.74 3.28-1.1-6.42L22 9.24l-6.38-.92L12 2 9.38 8.32 3 9.24l4.36 4.89L5.26 20z" />
                                </svg>
                                <span className="ml-1">{personData.deathday}</span>
                            </div>
                            <p className="mt-2">{personData.biography}</p>
                            <div className="flex flex-wrap items-center mt-4 text-sm text-gray-400">
                                <svg
                                    className="w-4 h-4 fill-current text-yellow-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27l5.74 3.28-1.1-6.42L22 9.24l-6.38-.92L12 2 9.38 8.32 3 9.24l4.36 4.89L5.26 20z" />
                                </svg>
                                <span className="ml-1">{personData.known_for_department}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-black dark:text-white pt-5">
            <h2 className="text-4xl font-bold p-2">Known For</h2>
            <div className="flex overflow-auto w-full custom-scrollbar">
                {personMovieCredits.cast.map((movie: any) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        voteAverage={movie.vote_average}
                    />
                ))}
            </div>
            <div className="flex overflow-auto w-full custom-scrollbar">
                {personTVCredits.cast.map((tv: any) => (
                    <TVCard
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.title}
                        releaseDate="n/a"
                        voteAverage={tv.vote_average}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}
