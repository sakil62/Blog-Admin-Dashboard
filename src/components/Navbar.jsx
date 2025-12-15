export default function Navbar({ open, setOpen }) {
  return (
    <header className="h-16 bg-white border-b flex items-center px-4 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="mr-4 px-3 py-1 border rounded text-lg"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold text-gray-800">
        Blog Admin Dashboard
      </h1>
    </header>
  )
}
    