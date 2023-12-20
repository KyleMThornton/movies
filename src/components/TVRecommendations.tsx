import { TVCard } from "./TVCard";

async function getTVRecommendations(TVId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/TV/${TVId}/recommendations?api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 3600 }})
    const TVRecs = await response.json()
    return TVRecs
}

export default async function TVRecommendations(TVId: any) {
    const TVRecs = await getTVRecommendations(TVId.TVId)

    return (
        <> {TVRecs.results.length !== 0 ?
            <div className="container text-black dark:text-white pb-5">
                <h2 className="text-4xl font-bold p-2">Recommendations</h2>
                <div className="flex overflow-auto w-full custom-scrollbar">
                    {TVRecs.results.map((TV: any) => (
                        <TVCard
                            key={TV.id}
                            id={TV.id}
                            poster={TV.poster_path}
                            title={TV.name}
                            releaseDate={TV.first_air_date}
                            voteAverage={TV.vote_average}
                        />
                    )
                    )}
                </div>
            </div> : null}
        </>
    )
}