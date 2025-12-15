import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Blogs from "./pages/Blogs"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}
