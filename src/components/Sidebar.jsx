import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">
        <Link
          to="/"
          className={`p-2 rounded ${
            location.pathname === "/"
              ? "bg-gray-700"
              : "hover:bg-gray-800"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/blogs"
          className={`p-2 rounded ${
            location.pathname === "/blogs"
              ? "bg-gray-700"
              : "hover:bg-gray-800"
          }`}
        >
          Blogs
        </Link>
      </nav>
    </aside>
  )
}
