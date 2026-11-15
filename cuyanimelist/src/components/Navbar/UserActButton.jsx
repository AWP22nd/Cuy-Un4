import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export const UserActButton = async() => {
    const user = await authUserSession();
    console.log(user)

    const actLabel = user ? "Sign Out" : "Sign In"
    const actURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div>
            <Link href={actURL} className="">{actLabel}</Link>
        </div>
    )
}

export default UserActButton
