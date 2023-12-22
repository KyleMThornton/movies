import { ActorCard } from "./ActorCard";

async function getCastData(TVId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${process.env.TMDB_API_KEY}`)
    const actorData = await response.json()
    return actorData
}

export default async function TVCast(TVId:any) {
    const actorData = await getCastData(TVId.TVId)

    return (
        <> {actorData.cast.length !== 0 ?
            <div className="h-auto">
                <h1 className="text-3xl font-bold pt-5">Cast</h1>
                <div className="flex overflow-auto w-full custom-scrollbar">
                    {actorData.cast.map((actor: any) => (
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
            </div> : null}
        </>
    )
}