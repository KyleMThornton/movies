async function getTVData(tvId: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()
    return movieData
}

export default async function TV({params } : { params: {id: number}}) {
    const movieData = await getTVData(params.id) 

    return (
        <div className="absolute inset-0 bg-cover bg-center h-96 opacity-50" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.results[0].backdrop_path})`}}>
            <div className="container">
                <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt={movieData.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <h2>{movieData.title}</h2>
            </div>
        </div>
    )
}