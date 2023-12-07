import TVActors from "@/components/TVActors";
import Rating from "@/components/Rating";
import Recommendations from "@/components/TVRecommendations";
import { FaPlay } from "react-icons/fa";

async function getTVData(TVId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${TVId}?api_key=${process.env.TMDB_API_KEY}`)
    const TVData = await response.json()
    return TVData
}

async function getTVRating(TVId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${TVId}/release_dates?api_key=${process.env.TMDB_API_KEY}`)
  const TVRatingData = await response.json()
  return TVRatingData
}

async function getTVCredits(TVId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${process.env.TMDB_API_KEY}`)
  const TVCredits = await response.json()
  return TVCredits
}

async function getTVTrailer(TVId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${TVId}/videos?api_key=${process.env.TMDB_API_KEY}`)
  const TVTrailer = await response.json()
  const officialTrailer = await TVTrailer.results.find((video: any) => video.name === "Official Trailer")
  const trailerUrl = `https://www.youtube.com/watch?v=${officialTrailer.key}`
  return trailerUrl
}

export default async function TV({params } : { params: {id: number}}) {
    const TVData = await getTVData(params.id)
    const TVRatingData = await getTVRating(params.id)
    let TVRating = '';
    if (TVRatingData && TVRatingData.results) {
        const usRating = TVRatingData.results.find((rating: any) => rating.iso_3166_1 === "US");
        if (usRating && usRating.release_dates && usRating.release_dates[0]) {
            TVRating = usRating.release_dates[0].certification;
        }
    }    
    const TVCredits = await getTVCredits(params.id)
    let director = "";
    try {
      director = TVCredits.crew.find((crewMember: any) => crewMember.job === "Director").name
    } catch (error) {
      null
    }
    let trailer;
    try {
        trailer = await getTVTrailer(params.id);
    } catch (error) {
        null
    }

    return (
      <div>
      <div className="relative bg-slate-950 h-128">
        <div
          className="absolute inset-0 bg-cover bg-center h-128 opacity-20"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${TVData.backdrop_path})`,
          }}
        ></div>
        <div className="container relative h-128 text-white">
          <div className="flex items-center h-full">
            { TVData.poster_path ?
            <img
              src={`https://image.tmdb.org/t/p/original/${TVData.poster_path}`}
              className="h-96 rounded-xl"
            /> :
            <img
              src={`/images/noposter.jpg`}
              className="h-96 rounded-xl"
            />
            }
            <div className="pl-5">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-4xl font-bold">
                    {TVData.title}
                  </h2>
                  <div className="flex flex-row">
                    { TVRating ? <h3 className="font-semibold">{TVRating} &bull;&nbsp;</h3> : null}
                    <h3 className="">{Math.floor(TVData.runtime/60)}h {TVData.runtime%60}m &bull;&nbsp;</h3>
                    <ul className="flex space-x-2 text-white text-md">
                      {TVData.genres.map((genre: any) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg italic font-light pt-5">
                    {TVData.tagline}
                  </h3>
                  <div className="flex pt-4 items-center">
                    <div className="text-xl">
                      {TVData.vote_average !== 0 ? <Rating review={TVData.vote_average} /> : null}
                    </div>
                    {trailer ? <a href={trailer} target="_blank"><div className="pl-5 flex items-center">
                      <div>
                        <FaPlay />
                      </div>
                      <h3 className="text-xl pl-2">Play Trailer</h3>
                    </div></a> : null}
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h4 className="text-2xl font-bold">Overview</h4>
                <p className="text-lg">{TVData.overview}</p>
              </div>
              <div className="flex justify-between w-1/2">
                {director !== "" ? <div>
                  <h5 className="pt-5 font-bold">Director</h5>
                  <p>{director}</p>
                </div> : null }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <TVActors TVId={params.id} /> */}
        {/* <Recommendations TVId={params.id} /> */}
      </div>
      </div>
    );
}