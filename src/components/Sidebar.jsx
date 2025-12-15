import { Link, useLocation } from "react-router-dom"

export default function Sidebar({ open }) {
  const location = useLocation()

  return (
    <aside
      className={`bg-gray-900 text-white h-screen transition-all duration-300
      ${open ? "w-64 p-6" : "w-0 p-0 overflow-hidden"}`}
    >
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
