const Pagination = () => {
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-warna-primary text-xl">
            <button className="transition-all hover:text-warna-accent">Previous</button>
            <p>1</p>
            <button className="transition-all hover:text-warna-accent">Next</button>
        </div>
    )
}

export default Pagination