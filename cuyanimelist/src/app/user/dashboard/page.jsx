import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const Page = async() => {
    const user = await authUserSession()


    return (
    <div className="text-warna-primary flex items-center gap-6">
        <div className="px-4 py-4">
            <Image src={user.image} alt="..." width={130} height={130} className="rounded-full border border-warna-accent" />
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-10">Dashboard</h3>
            <h5 className="text-lg text-gray-600 dark:text-gray-300">Welcome, {user.name}</h5>
        </div>
            <div className="flex flex-wrap gap-2 py-8">
                <Link href="/user/dashboard/collections" className="rounded-md bg-warna-accent text-warna-dark font-bold px-2 py-2">My Collections</Link>
                <Link href="/user/dashboard/comments" className="rounded-md bg-warna-accent text-warna-dark font-bold px-2 py-2">My Comments</Link>
            </div>
    </div>
    )
}

export default Page
