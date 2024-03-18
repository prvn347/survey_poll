
interface pagination{
    postPerPage :number,
length: number,
handlePagination: (pageNumber: number) => void;
currentpage:number
}
export function Pagination({ postPerPage,length,handlePagination,currentpage}:pagination){

const paginationNumbers = []

for(let i = 1 ; i<=Math.ceil(length  / postPerPage ); i++){
    paginationNumbers.push(i)
}

return (
    <div className='p-3 bg-white text-black dark:bg-dark dark:text-white'>
      {paginationNumbers.map((pageNumber) => (
        <button  className={`p-4 text-black ${currentpage === pageNumber ? 'bg-yellow-300' : ''}`} onClick={() => handlePagination(pageNumber)} key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  );
}