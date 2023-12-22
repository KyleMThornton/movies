import { MovieCard } from "@/components/MovieCard";
import { TVCard } from "@/components/TVCard";
import { ActorCard } from "@/components/ActorCard";

async function getSearchResults(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );
  const searchData = await response.json();
  return searchData;
}

async function getMovieData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const movieData = await response.json();
  return movieData;
}

async function getTVData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const tvData = await response.json();
  return tvData;
}

async function getPersonData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const personData = await response.json();
  return personData;
}

export default async function Search({
  params,
}: {
  params: { query: string };
}) {
  let data;
  params.query === "movie"
    ? (data = getMovieData())
    : params.query === "tv"
    ? (data = getTVData())
    : params.query === "person"
    ? (data = getPersonData())
    : (data = getSearchResults(params.query));
  return (
    <div className="container my-5">
    <div className="mb-5">
      {params.query === "movie" ? (
        <h1 className="text-4xl font-bold ">Popular Movies</h1>
      ) : params.query === "tv" ? (
        <h1 className="text-4xl font-bold ">Popular TV Shows</h1>
      ) : params.query === "person" ? (
        <h1 className="text-4xl font-bold ">Popular People</h1>
      ) : (
        <h1 className="text-4xl font-bold ">
          Search Results for "{decodeURI(params.query)}"
        </h1>
      )}
      </div>
      {params.query === "movie" ? (
        <div className="flex flex-wrap">
          {await data.then((movieData: any) =>
            movieData.results.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
              />
            ))
          )}
        </div>
      ) : params.query === "tv" ? (
        <div className="flex flex-wrap">
          {await data.then((tvData: any) =>
            tvData.results.map((tv: any) => (
              <TVCard
                key={tv.id}
                id={tv.id}
                poster={tv.poster_path}
                title={tv.name}
                releaseDate={tv.first_air_date}
                voteAverage={tv.vote_average}
              />
            ))
          )}
        </div>
      ) : params.query === "person" ? (
        <div className="flex flex-wrap">
          {await data.then((personData: any) =>
            personData.results.map((person: any) => (
              <ActorCard
                key={person.id}
                id={person.id}
                name={person.name}
                character={person.known_for_department}
                profile_path={person.profile_path}
              />
            ))
          )}
        </div>
      ) : (
        <div className="flex flex-wrap">
          {await data.then((searchData: any) =>
            searchData.results.map((result: any) =>
              result.media_type === "movie" ? (
                <MovieCard
                  key={result.id}
                  id={result.id}
                  poster={result.poster_path}
                  title={result.title}
                  releaseDate={result.release_date}
                  voteAverage={result.vote_average}
                />
              ) : result.media_type === "tv" ? (
                <TVCard
                  key={result.id}
                  id={result.id}
                  poster={result.poster_path}
                  title={result.name}
                  releaseDate={result.first_air_date}
                  voteAverage={result.vote_average}
                />
              ) : result.media_type === "person" ? (
                <ActorCard
                  key={result.id}
                  id={result.id}
                  name={result.name}
                  character={result.known_for_department}
                  profile_path={result.profile_path}
                />
              ) : null
            )
          )}
        </div>
      )}
    </div>
  );
}
