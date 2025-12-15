export default function BlogTable({ blogs, onDelete }) {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Author</th>
          <th className="p-2 text-left">Category</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>

      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id} className="border-t">
            <td className="p-2">{blog.title}</td>
            <td className="p-2">{blog.author}</td>
            <td className="p-2">{blog.category}</td>
            <td className="p-2">{blog.status}</td>
            <td className="p-2 text-center">
              <button
                onClick={() => onDelete(blog.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
