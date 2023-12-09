import { ActorCard } from "./ActorCard";

async function getTVActorData(tvId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${process.env.TMDB_API_KEY}`)
    const TVactorData = await response.json()
    return TVactorData
}

export default async function TVActors(tvId:any) {
    const TVactorData = await getTVActorData(tvId.tvId)

    return (
        <>
            <div className="h-112">
                <h1 className="text-3xl font-bold py-5">Actors</h1>
                <div className="flex overflow-auto w-full custom-scrollbar">
                    {TVactorData.cast.map((actor: any) => (
                        <ActorCard
                            key={actor.id}
                            id={actor.id}
                            name={actor.name}
                            character={actor.character}
                            profile_path={actor.profile_path}
                        />
                    )
                    )}
                </div>
            </div>
        </>
    )
}