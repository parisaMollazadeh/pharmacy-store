interface Props {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}
  
  export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    const visiblePages = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1)
  
    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)} className="text-gray-500 text-lg">
            {'<'}
          </button>
        )}
  
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded border text-sm ${
              page === currentPage
                ? 'bg-white border-blue-500 text-blue-500 font-bold'
                : 'text-gray-500 border-gray-300'
            }`}
          >
            {page}
          </button>
        ))}
  
        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)} className="text-gray-500 text-lg">
            {'>'}
          </button>
        )}
      </div>
    )
  }
  