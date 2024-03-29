import { TVCard } from "./TVCard";

export default async function TV() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?with_origin_country=US&api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const tvData = await response.json();

  return (
    <div className="bg-gradient-to-r from-slate-600 to-gray-800 dark:from-gray-800 dark:to-slate-900">
      <div className="container text-black dark:text-white pb-4">
        <h2 className="text-4xl font-bold pl-2 py-2 text-white">
          Popular Television
        </h2>
        <div className="flex overflow-auto w-full custom-scrollbar">
          {tvData.results.map((tv: any) => (
            <TVCard
              id={tv.id}
              key={tv.id}
              poster={tv.poster_path}
              title={tv.name}
              releaseDate={tv.first_air_date}
              voteAverage={tv.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
