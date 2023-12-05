async function getMovieData(movieId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()
    return movieData
}

export default async function Movie({params } : { params: {id: number}}) {
    const movieData = await getMovieData(params.id) 

    return (
      <div className="relative bg-slate-950 h-128">
        <div
          className="absolute inset-0 bg-cover bg-center h-128 opacity-20"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
          }}
        ></div>
        <div className="container relative h-128">
          <div className="flex items-center h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              className="h-96 rounded-xl"
            />
            <div className="pl-5">
              <h2 className="text-white text-4xl font-bold">
                {movieData.title} ({movieData.release_date.substring(0, 4)})
              </h2>
              <div className="flex flex-row">
                <h3 className="text-white">{movieData.release_date.substring(5,7)}/{movieData.release_date.substring(8,10)}/{movieData.release_date.substring(0,4)} &bull;&nbsp;</h3>
                <h3 className="text-white">{Math.floor(movieData.runtime/60)}h {movieData.runtime%60}m &bull;&nbsp;</h3>
                <ul className="flex space-x-2 text-white text-md">
                  {movieData.genres.map((genre: any) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <h3 className="text-white text-lg italic font-light pt-5">
                {movieData.tagline}
              </h3>
              <div className="pt-5">
                <h4 className="text-white text-2xl font-bold">Overview</h4>
                <p className="text-white text-lg">{movieData.overview}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
}