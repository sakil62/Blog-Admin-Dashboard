import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import BlogForm from "../components/BlogForm"
import BlogTable from "../components/BlogTable"
import Pagination from "../components/Pagination"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { BLOG_CATEGORIES, BLOG_STATUS } from "../utils/constants"
import Footer from "../components/Footer"

export default function Blogs() {
  // persistent blogs
  const [blogs, setBlogs] = useLocalStorage("blogs", [])

  // pagination
  const [page, setPage] = useState(1)

  // search & filters
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("")

  // ✅ sidebar toggle (desktop + mobile)
  const [open, setOpen] = useState(true)

  /* ===============================
     SOFT DELETE AUTO PURGE (24 hrs)
     =============================== */
  useEffect(() => {
    const now = Date.now()
    const ONE_DAY = 24 * 60 * 60 * 1000

    setBlogs(
      blogs.filter(
        (b) => !b.deletedAt || now - b.deletedAt < ONE_DAY
      )
    )
    // eslint-disable-next-line
  }, [])

  /* ===============================
     FILTER + SEARCH (hide deleted)
     =============================== */
  const filteredBlogs = blogs
    .filter((b) => !b.deletedAt)
    .filter((blog) => {
      const matchSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.author.toLowerCase().includes(search.toLowerCase())

      const matchCategory = category ? blog.category === category : true
      const matchStatus = status ? blog.status === status : true

      return matchSearch && matchCategory && matchStatus
    })

  /* ===============================
     PAGINATION (5 per page)
     =============================== */
  const start = (page - 1) * 5
  const paginatedBlogs = filteredBlogs.slice(start, start + 5)

  /* ===============================
     CRUD HANDLERS
     =============================== */
  function addBlog(blog) {
    setBlogs([blog, ...blogs])
    setPage(1)
  }

  function deleteBlog(id) {
    setBlogs(
      blogs.map((b) =>
        b.id === id ? { ...b, deletedAt: Date.now() } : b
      )
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ sidebar controlled by width toggle */}
      <Sidebar open={open} />

      <div className="flex-1 flex flex-col">
        {/* ✅ button toggles sidebar */}
        <Navbar open={open} setOpen={setOpen} />

        <main className="flex-1 p-6">
          {/* BLOG FORM */}
          <BlogForm onSave={addBlog} />

          {/* SEARCH + FILTER UI */}
          <div className="bg-white p-4 rounded shadow mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Search by title or author"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="border p-2 rounded"
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setPage(1)
              }}
              className="border p-2 rounded"
            >
              <option value="">All Categories</option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
                setPage(1)
              }}
              className="border p-2 rounded"
            >
              <option value="">All Status</option>
              {BLOG_STATUS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <div className="flex items-center font-semibold">
              Total: {filteredBlogs.length}
            </div>
          </div>

          {/* BLOG TABLE */}
          <BlogTable
            blogs={paginatedBlogs}
            onDelete={deleteBlog}
          />

          {/* PAGINATION */}
          <Pagination
            total={filteredBlogs.length}
            page={page}
            setPage={setPage}
          />
        </main>

        {/* ✅ footer fixed to bottom */}
        <Footer />
      </div>
    </div>
  )
}
