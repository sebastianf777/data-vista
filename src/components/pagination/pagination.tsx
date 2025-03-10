import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

function getPageNumbers(currentPage: number, totalPages: number, maxVisible: number = 7): (number | string)[] {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    const windowSize = maxVisible - 2; // excluding first and last page
    let start = Math.max(currentPage - Math.floor(windowSize / 2), 2);
    let end = start + windowSize - 1;

    if (end >= totalPages) {
      end = totalPages - 1;
      start = end - windowSize + 1;
    }

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return pages;
}

const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className={'mt-4 flex justify-center'}>
      <ul className={'flex list-none'}>
        {pages.map((page, index) => (
          <li key={index} className={'mx-1'}>
            {typeof page === "number" ? (
              <Link
                href={`${baseUrl}&page=${page}`}
                className={`px-3 py-1 border rounded hover:bg-secondary transition ${
                  page === currentPage ? "bg-secondary text-white" : "bg-terciary text-white"
                }`}
              >
                {page}
              </Link>
            ) : (
              <span className={'px-3 py-1'}>...</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
