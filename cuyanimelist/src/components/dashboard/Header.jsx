"use client"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header =  ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <button className="text-warna-primary" onClick={handleBack}>
                <ArrowLeftIcon size={28} />
            </button>
            <h3 className="text-xl text-warna-primary font-bold">{title}</h3>
        </div>
    )
}

export default Header
