import { useState } from "react"
import { BLOG_CATEGORIES, BLOG_STATUS } from "../utils/constants"
import { validateImage } from "../utils/imageValidator"

export default function BlogForm({ onSave }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    status: "Draft",
    image: null,
    preview: "",
  })

  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleImage(e) {
    const file = e.target.files[0]
    const result = validateImage(file)

    if (!result.valid) {
      setError(result.error)
      return
    }

    setError("")
    setForm({
      ...form,
      image: file,
      preview: URL.createObjectURL(file),
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.image) {
      setError("Image is required")
      return
    }

    onSave({
      id: Date.now(),
      title: form.title,
      author: form.author,
      category: form.category,
      status: form.status,
      image: form.preview,
      createdAt: new Date().toISOString(),
    })

    setForm({
      title: "",
      author: "",
      category: "",
      status: "Draft",
      image: null,
      preview: "",
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mb-6 space-y-4"
    >
      <h3 className="text-xl font-semibold">Add Blog</h3>

      {error && <p className="text-red-600">{error}</p>}

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>
        {BLOG_CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        {BLOG_STATUS.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <input type="file" accept="image/*" onChange={handleImage} />

      {form.preview && (
        <img
          src={form.preview}
          alt="Preview"
          className="h-32 object-cover rounded"
        />
      )}

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Blog
      </button>
    </form>
  )
}
