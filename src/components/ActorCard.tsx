type ActorCardProps = {
    name: string;
    character: string;
    profile_path: string;
    id: number;
};

export const ActorCard: React.FC<ActorCardProps> = ({name, character, profile_path, id}) => {
    return (
            <div className="flex flex-col m-2 h-80 text-black border rounded-xl">
                <div className="h-60 w-48 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt={name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <h3 className="pt-2 pl-2 font-bold text-md">{name}</h3>
                    <div className="flex items-center justify-between pl-2">
                        <div className="flex flex-col">
                            <p>{character}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}