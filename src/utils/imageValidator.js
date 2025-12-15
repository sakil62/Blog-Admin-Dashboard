export function validateImage(file) {
  if (!file) return { valid: false, error: "Image is required" }

  const allowedTypes = ["image/jpeg", "image/png"]
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "Only JPG or PNG allowed" }
  }

  const maxSize = 1 * 1024 * 1024 // 1MB
  if (file.size > maxSize) {
    return { valid: false, error: "Image must be less than 1MB" }
  }

  return { valid: true }
}
