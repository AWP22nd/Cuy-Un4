import Image from "next/image"
import Link from "next/link"
import Header from "@/components/dashboard/Header"

const Page = () => {
    return (
        <section className="mt-4 px-6 w-full">
            <Header title={"My Collections"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="relative border-2 border-warna-accent">
                <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-warna-accent h-16">
                        <h5 className="text-xl text-center">Title</h5>
                    </div>
                </Link>

                <Link href="/" className="relative border-2 border-warna-accent">
                <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-warna-accent h-16">
                        <h5 className="text-xl text-center">Anime Title</h5>
                    </div>
                </Link>

                <Link href="/" className="relative border-2 border-warna-accent">
                <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex item-center justify-center bottom-0 w-full bg-warna-accent h-16">
                        <h5 className="text-xl text-center">Title</h5>
                    </div>
                </Link>

                <Link href="/" className="relative border-2 border-warna-accent">
                <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-warna-accent h-16">
                        <h5 className="text-xl text-center">Title</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page
