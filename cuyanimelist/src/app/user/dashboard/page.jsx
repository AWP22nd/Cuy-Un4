import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    console.log(user)

    return (
    <div className="text-warna-primary flex items-center gap-6">
        <div className="px-4 py-4">
            <Image src={user.image} alt="..." width={130} height={130} className="rounded-full border border-warna-accent" />
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-1">Dashboard</h3>
            <h5 className="text-lg text-gray-600 dark:text-gray-300">Welcome, {user.name}</h5>
        </div>
    </div>
    )
}

export default Page