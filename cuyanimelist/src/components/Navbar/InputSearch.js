"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const InputSearch = () => {
    return (
        <div>
            <input placeholder="Search..." className="" />
            <button className="absolute top-0 end-6">
                <MagnifyingGlassIcon size={24} />
            </button>
        </div>
    )
}

export default InputSearch
