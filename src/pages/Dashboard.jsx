import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Dashboard() {
  // ✅ SAME STATE LOGIC AS BLOGS
  const [open, setOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with toggle */}
        <Navbar open={open} setOpen={setOpen} />

        {/* Main grows to push footer down */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">
            Dashboard
          </h2>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </div>
  )
}
