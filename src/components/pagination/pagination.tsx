type PaginationProps = {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
};

const Pagination = ({ currentPage, totalPages, baseUrl }:PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <nav className={"mt-4 flex justify-center"}>
            <ul className={"flex list-none"}>
                {pages.map((page) => (
                    <li key={page} className={"mx-1"}>
                        <a
                            href={`${baseUrl}&page=${page}`}
                            className={`px-3 py-1 border rounded ${
                                page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                            }`}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;