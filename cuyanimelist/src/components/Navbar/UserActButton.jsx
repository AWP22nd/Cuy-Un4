import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export const UserActButton = async() => {
    const user = await authUserSession();
    console.log(user)

    const actLabel = user ? "Sign Out" : "Sign In"
    const actURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-4">
            {
                user ? 
                <Link href="/user/dashboard" className="py-1">Dashboard</Link> : null
            }
            <Link href={actURL} className="rounded-lg bg-warna-dark text-warna-accent py-1 px-4 inline-box">{actLabel}</Link>
        </div>
    )
}

export default UserActButton
