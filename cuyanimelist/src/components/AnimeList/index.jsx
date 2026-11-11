import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 px-2">    
                {api.data?.map(( anime, index ) => {
                    return (
                        <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-warna-primary" key={index}>
                            <Image src={anime.images.webp.image_url} alt=". . . " width={350} height={350} className="w-full max-h-64 object-cover" />
                            <h3 className="font-bold md:text-xl text-md p-3 text-warna-primary hover:text-warna-accent transition-all">{anime.title}</h3>
                        </Link>
                    )
                })}
                
            </div>
    );
};

export default AnimeList;
