"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const Router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        // alert(searchRef.current.value)
        const keyword = 
        router.push('/search/${}')
    }

    return (
        <div className="relative">
            <input placeholder="Search..." className="w-full p-2 rounded" ref={searchRef} />
            <button className="absolute top-2 end-3" onClick={handleSearch}>
                <MagnifyingGlassIcon size={24} />
            </button>
        </div>
    )
}

export default InputSearch
