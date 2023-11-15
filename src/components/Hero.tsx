export default async function Hero() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()
    console.log(movieData)

    return (
        <div>
            {/* <img src={`https://image.tmdb.org/t/p/original${movieData.results[0].backdrop_path}`} alt="" className="h-96" /> */}
            <div className="bg-slate-950">
                <div className="bg-cover bg-center h-96 opacity-50" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.results[0].backdrop_path})`}}>
                    <div className="container">
                        <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
                            <h1 className="text-6xl font-bold text-white">Welcome to the Movie Database</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}