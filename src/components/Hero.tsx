export default async function Hero() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()

    return (
        <div className="relative bg-slate-950 h-96">
            <div className="absolute inset-0 bg-cover bg-center h-96 opacity-50" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.results[0].backdrop_path})`}}>
            </div>
            <div className="container relative flex flex-col justify-center items-center text-center h-full p-5">
                <h1 className="text-6xl font-bold text-white">Welcome to the Movie Database!</h1>
                <h2 className="text-xl text-white">Get info on your favorite movies, tv shows, and actors!</h2>
            </div>
        </div>
    ) 
}