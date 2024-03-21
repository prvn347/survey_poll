interface pagination {
  postPerPage: number;
  length: number;
  handlePagination: (pageNumber: number) => void;
  currentpage: number;
}
export function Pagination({
  postPerPage,
  length,
  handlePagination,
  currentpage,
}: pagination) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="p-3 bg-lightie dark:bg-darkie text-black dark:bg-dark dark:text-white">
      {paginationNumbers.map((pageNumber) => (
        <button
          className={`p-4 text-black dark:text-white ${
            currentpage === pageNumber
              ? "bg-slate-300 text-black dark:text-black"
              : ""
          }`}
          onClick={() => handlePagination(pageNumber)}
          key={pageNumber}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
