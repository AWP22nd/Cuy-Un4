import Link from "next/link";
import { getServerSession } from "next-auth"; 

export const UserActButton = async() => {
    const user =  await getServerSession()

    return (
        <div>
            <Link href="/api/auth/signin" className="">Sign In</Link>
        </div>
    )
}

export default UserActButton