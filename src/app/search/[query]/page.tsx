async function getSearchResults(query: string) {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${query}`)
    const searchData = await response.json()
    return searchData
}

async function getMovieData() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
    const movieData = await response.json()
    return movieData
}

async function getTVData() {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`)
    const tvData = await response.json()
    return tvData
}

async function getPersonData() {
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`)
    const personData = await response.json()
    return personData
}

export default async function Search({params } : { params: {query: string}}) {
    let data;
    params.query === "movie" ? data = getMovieData() : params.query === "tv" ? data = getTVData() : params.query === "person" ? data = getPersonData() : data = getSearchResults(params.query)
    return (
        <div>
            {params.query === "movie" ? <h1 className="text-4xl font-bold ">Popular Movies</h1> : params.query === "tv" ? <h1 className="text-4xl font-bold ">Popular TV Shows</h1> : params.query === "person" ? <h1 className="text-4xl font-bold ">Popular People</h1> : <h1 className="text-4xl font-bold ">Search Results for "{params.query}"</h1>}
        </div>
    )
}