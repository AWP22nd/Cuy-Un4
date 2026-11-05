"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            alert("Enter key pressed");
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    } 

    return (
        <div className="relative">
            <input placeholder="Search..." className="w-full p-2 rounded" ref={searchRef} onKeyDown={handleSearch} />
            <button className="absolute top-1 end-3" onClick={handleSearch}>
                <MagnifyingGlassIcon size={16} />
            </button>
        </div>
    )
}

export default InputSearch
