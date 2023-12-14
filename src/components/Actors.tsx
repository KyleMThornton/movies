import { ActorCard } from "./ActorCard";

export default async function Actors() {
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 3600 } })
    const actorData = await response.json()

    return (
        <div className="container pb-4 text-black dark:text-white">
            <h2 className="text-4xl font-bold p-2">Popular Actors</h2>
            <div className="flex overflow-auto w-full custom-scrollbar">
                {actorData.results.map((actor: any) => (
                    <ActorCard
                        key={actor.id}
                        id={actor.id}
                        name={actor.name}
                        profile_path={actor.profile_path}
                        known_for={actor.known_for}
                    />
                )
                )}
            </div>
        </div>
    )
}