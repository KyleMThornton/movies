type MovieCardProps = {
    poster: string;
    title: string;
    releaseDate: string;
    voteAverage: number;
};

export const MovieCard: React.FC<MovieCardProps> = ({ poster, title, releaseDate, voteAverage }) => {
    return (
        <div className="flex flex-col h-96 w-80">
            <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            <h3>{title}</h3>
            <p>{releaseDate}</p>
            <p>{voteAverage}</p>
        </div>
    )
}