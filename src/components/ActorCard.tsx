import Link from "next/link";

type ActorCardProps = {
  name: string;
  character?: string;
  profile_path: string;
  id: number;
  known_for?: Array<{ title: string }>;
};

export const ActorCard: React.FC<ActorCardProps> = ({
  name,
  character,
  profile_path,
  id,
  known_for,
}) => {
  const headshot = profile_path
    ? `https://image.tmdb.org/t/p/original/${profile_path}`
    : "/images/noheadshot.jpg";
  return (
    <div className="flex flex-col m-2 w-48 h-auto rounded-xl pb-2 bg-white dark:bg-slate-700 shadow-lg">
      <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
        <Link href={`/person/${id}`}>
          <img
            src={headshot}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <h3 className="pt-2 pl-2 font-bold text-md">{name}</h3>
        <div className="flex items-center justify-between pl-2">
          {character ? (
            <div className="flex flex-col">
              <p>{character}</p>
            </div>
          ) : known_for && known_for.length > 0 ? (
            <div className="flex flex-wrap text-sm">
              <p>
                {known_for[0].title !== undefined
                  ? `${known_for[0].title}`
                  : null}
              </p>
              <p>
                {known_for[0].title !== undefined &&
                known_for[1].title !== undefined
                  ? ","
                  : null}
                &nbsp;
              </p>
              <p>
                {known_for[1].title !== undefined
                  ? `${known_for[1].title}`
                  : null}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
