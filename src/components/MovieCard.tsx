import Rating from "./Rating";

type MovieCardProps = {
    poster: string;
    title: string;
    releaseDate: string;
    voteAverage: number;
};

export const MovieCard: React.FC<MovieCardProps> = ({ poster, title, releaseDate, voteAverage }) => {
    return (
        <div className="flex flex-col m-2 w-96 h-96">
            <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col">
                <h3 className="pt-5 font-bold text-md">{title}</h3>
                <div className="flex flex-col">
                    <p>{releaseDate.slice(5,7)}/{releaseDate.slice(8,10)}/{releaseDate.slice(0,4)}</p>
                    <p>{voteAverage}/10</p>
                </div>
            </div>
        </div>
    )
}