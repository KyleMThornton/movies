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
            <div className="h-60 w-48">
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="pt-5 font-bold text-md">{title}</h3>
                <div className="flex flex-col items-center">
                    <p>{releaseDate}</p>
                    <p>{voteAverage}/10</p>
                </div>
            </div>
        </div>
    )
}