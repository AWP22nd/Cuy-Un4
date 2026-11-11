import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async({ params }) => {
    const { id } = await params
    const anime = await getAnimeResponse(`anime/${id}`, "")
    // console.log(anime)

    if (!anime?.data) {
        return <p className="text-warna-primary">Anime not found.</p>
    }

    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-warna-primary text-2xl ">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-warna-primary">
            <Image src = {anime.data.images.webp.image_url} alt = {anime.data.images.jpg.image_url} 
            width = {250} height={250} className="w-full rounded object-cover"/>

            <p className="text-justify text-l">{anime.data.synopsis}</p>
        </div>
        </>
    )
}


export default Page