const Pagination = ({ page, lastPage, setPage }) => {

    const scrollToTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 1
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1 )
        // setPage((prevState) => (prevState >= lastPage ? 1 : prevState + 1))
        scrollToTop()
    }

    const handlePreviousPage = () => {
        setPage((prevState) => prevState - 1)
        // setPage((prevState) => Math.max(prevState - 1, 1))
        scrollToTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-warna-primary text-xl">
            {page <= 1 ? null :
                <button onClick={handlePreviousPage} className="transition-all hover:text-warna-accent">Previous</button>
            }

            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage}  className="transition-all hover:text-warna-accent">Next</button>
            }
        </div>
    )
}

export default Pagination;
