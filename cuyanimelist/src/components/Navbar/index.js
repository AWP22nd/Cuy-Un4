import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-5 gap-1">
                <Link href="/" className="font-bold text-white text-2xl">Cuy-AnimeList</Link>
                <input placeholder="Search..." className="" />
            </div>
        </header>
    )
}

export default Navbar;