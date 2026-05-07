import Link from "next/link";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  basePath?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 3,
  basePath = "",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-2 bg-white dark:bg-navy-surface p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <Link
          href={`${basePath}?page=${Math.max(1, currentPage - 1)}`}
          className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep transition ${
            currentPage === 1
              ? "text-gray-300 dark:text-gray-600 pointer-events-none"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <span className="material-icons-outlined">chevron_left</span>
        </Link>

        {pages.map((page) => (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
              currentPage === page
                ? "bg-primary text-white font-bold shadow-md transform hover:scale-105"
                : "hover:bg-gray-100 dark:hover:bg-navy-deep text-gray-600 dark:text-gray-300 font-medium"
            }`}
          >
            {page}
          </Link>
        ))}

        <Link
          href={`${basePath}?page=${Math.min(totalPages, currentPage + 1)}`}
          className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep transition ${
            currentPage === totalPages
              ? "text-gray-300 dark:text-gray-600 pointer-events-none"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <span className="material-icons-outlined">chevron_right</span>
        </Link>
      </nav>
    </div>
  );
}
