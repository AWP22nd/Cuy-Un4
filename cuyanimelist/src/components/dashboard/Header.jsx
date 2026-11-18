"use client"
import { ArrowLeftIcon } from "@phosphor-icons/react"

const Header =  () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <span className="text-warna-primary">
                <ArrowLeftIcon size={28} />                </span>
            <h3 className="text-xl text-warna-primary font-bold">Collections</h3>
        </div>
    )
}

export default Header