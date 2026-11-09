"use client"

import { FileSearchIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-h-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearchIcon size={32} className="text-warna-warning" />
                <h3 className="text-warna-warning text-2xl font-bold">404! NOT FOUND</h3>
                <Link href="/" className="text-warna-warning hover:text-warna-accent transition-all hover:underline">
                    Back to Home
                </Link>
            </div>  
        </div>
    )
}

export default Page
