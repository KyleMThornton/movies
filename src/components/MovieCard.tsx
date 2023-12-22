import Rating from "./Rating";
import Link from 'next/link';

type MovieCardProps = {
    poster: string;
    title: string;
    releaseDate: string;
    voteAverage: number;
    id: number;
};

export const MovieCard: React.FC<MovieCardProps> = ({ poster, title, releaseDate, voteAverage, id }) => {
    const moviePoster = poster ? `https://image.tmdb.org/t/p/original/${poster}` : "/images/noposter.jpg"
    return (
        <div className="flex flex-col m-2 w-48 h-auto border rounded-xl pb-2">
            <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                <Link href={`/movie/${id}`}><img src={moviePoster} alt={title} className="w-full h-full object-cover rounded-lg" /></Link>
            </div>
            <div className="flex justify-between pt-5 px-2">
                <div>
                    <h3 className="font-bold text-md text-wrap">{title}</h3>
                    {releaseDate ? <p>{releaseDate.slice(5,7)}/{releaseDate.slice(8,10)}/{releaseDate.slice(0,4)}</p> : null}
                </div>
                <div className="">
                        {voteAverage ? <Rating review={voteAverage} /> : null}
                </div>
            </div>
        </div>
    )
}