import Image from "next/image";

const AnimeList = () => {
    return (
        <div className="grid grid-cols-3 gap-4 h-64">
            <div className="bg-blue-500 text-white p-4">
                <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={400} />
            </div>
            <div className="bg-indigo-500 text-white p-4">BOX 2</div>
            <div className="bg-violet-500 text-white p-4">BOX 3</div>
            <div className="bg-violet-600 text-white p-4">BOX 4</div>
            <div className="bg-violet-700 text-white p-4">BOX 5</div>
            <div className="bg-violet-800 text-white p-4">BOX 3</div>
        </div>
    );
};

export default AnimeList;
