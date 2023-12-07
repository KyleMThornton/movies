import Actors from "@/components/Actors";
import Rating from "@/components/Rating";
import { Dirent } from "fs";
import { FaPlay } from "react-icons/fa";

async function getMovieData(movieId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()
    return movieData
}

async function getMovieRating(movieId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${process.env.TMDB_API_KEY}`)
  const movieRatingData = await response.json()
  return movieRatingData
}

async function getMovieCredits(movieId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`)
  const movieCredits = await response.json()
  return movieCredits
}

async function getMovieTrailer(movieId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`)
  const movieTrailer = await response.json()
  const officialTrailer = await movieTrailer.results.find((video: any) => video.name === "Official Trailer")
  const trailerUrl = `https://www.youtube.com/watch?v=${officialTrailer.key}`
  return trailerUrl
}

export default async function Movie({params } : { params: {id: number}}) {
    const movieData = await getMovieData(params.id)
    const movieRatingData = await getMovieRating(params.id)
    const movieRating = movieRatingData.results.find((rating: any) => rating.iso_3166_1 === "US").release_dates[0].certification
    const movieCredits = await getMovieCredits(params.id)
    const director = movieCredits.crew.find((crewMember: any) => crewMember.job === "Director").name
    const screenwriters = movieCredits.crew.filter((crewMember: any) => crewMember.job === "Screenplay").map((crewMember: any) => crewMember.name)
    const trailer = await getMovieTrailer(params.id)

    return (
      <div>
      <div className="relative bg-slate-950 h-128">
        <div
          className="absolute inset-0 bg-cover bg-center h-128 opacity-20"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
          }}
        ></div>
        <div className="container relative h-128 text-white">
          <div className="flex items-center h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              className="h-96 rounded-xl"
            />
            <div className="pl-5">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-4xl font-bold">
                    {movieData.title} ({movieData.release_date.substring(0, 4)})
                  </h2>
                  <div className="flex flex-row">
                    { movieRating ? <h3 className="font-semibold">{movieRating} &bull;&nbsp;</h3> : null}
                    <h3 className="">{movieData.release_date.substring(5,7)}/{movieData.release_date.substring(8,10)}/{movieData.release_date.substring(0,4)} &bull;&nbsp;</h3>
                    <h3 className="">{Math.floor(movieData.runtime/60)}h {movieData.runtime%60}m &bull;&nbsp;</h3>
                    <ul className="flex space-x-2 text-white text-md">
                      {movieData.genres.map((genre: any) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg italic font-light pt-5">
                    {movieData.tagline}
                  </h3>
                  <div className="flex pt-4 items-center">
                    <div className="text-xl">
                      <Rating review={movieData.vote_average} />
                    </div>
                    <a href={trailer} target="_blank"><div className="pl-5 flex items-center">
                      <div>
                        <FaPlay />
                      </div>
                      <h3 className="text-xl pl-2">Play Trailer</h3>
                    </div></a>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h4 className="text-2xl font-bold">Overview</h4>
                <p className="text-lg">{movieData.overview}</p>
              </div>
              <div className="flex justify-between w-1/2">
                <div>
                  <h5 className="pt-5 font-bold">Director</h5>
                  <p>{director}</p>
                </div>
                <div>
                  <h5 className="pt-5 font-bold">Screenplay</h5>
                  <p>{screenwriters.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Actors movieId={params.id} />
      </div>
      </div>
    );
}