export default function Pagination({ total, page, setPage }) {
  const pages = Math.ceil(total / 5)

  return (
    <div className="flex gap-2 justify-center mt-4">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 border rounded ${
            page === i + 1 ? "bg-blue-600 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
