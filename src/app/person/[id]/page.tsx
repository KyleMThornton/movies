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
                        <div className="flex-auto ml-10">
                            <h2 className="text-4xl font-bold">{personData.name}</h2>
                            <div className="flex flex-wrap items-center text-gray-400 mt-4">
                                <h3 className="font-semibold">Date of birth:&nbsp;</h3>
                                <h3 className="font-light">{personData.birthday}</h3>
                                <span className="font-semibold">&nbsp;&bull;&nbsp;</span>
                                <h3 className="font-semibold">Place of birth:&nbsp;</h3>
                                <h3 className="font-light">{personData.place_of_birth}</h3>
                            </div>
                            <div className="flex flex-wrap items-center text-sm text-gray-400">
                                <span className="">{personData.deathday}</span>
                            </div>
                            <div className="flex flex-wrap items-center text-gray-400">
                                <span className="font-semibold">Known For:&nbsp;</span>
                                <span className="font-light">{personData.known_for_department}</span>
                            </div>
                            <p className="mt-4">{personData.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-black dark:text-white pt-5">
            <h2 className="text-4xl font-bold p-2">Movie Credits</h2>
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
            <h2 className="text-4xl font-bold p-2 pt-5">TV Credits</h2>
            <div className="flex overflow-auto w-full custom-scrollbar mb-5">
                {personTVCredits.cast.map((tv: any) => (
                    <TVCard
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.name}
                        releaseDate={tv.first_air_date}
                        voteAverage={tv.vote_average}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}
