export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white py-3 px-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} · Built by <span className="font-medium text-gray-700">
        Sakil Parvez
      </span>
    </footer>
  )
}
