Blog Admin Dashboard

A production-style Blog Admin Dashboard built using React, Vite, and Tailwind CSS, showcasing modern frontend engineering practices including clean UI/UX, scalable component architecture, client-side data persistence, and logical problem solving.

🔗 Live Project

Live URL:(https://blog-admin-dashboard-one.vercel.app/)

🎥 Demo Video

Demo Video (3–5 minutes): Add Loom link here

📌 Project Overview

This application provides an admin interface for managing blog posts with full CRUD functionality.
It is designed to simulate a real-world admin dashboard, focusing on maintainability, performance, and usability.

The project demonstrates:

Professional frontend architecture

Reusable components

Clean state management

Responsive and accessible UI

Logical handling of medium-complexity features

🛠️ Tech Stack

React (Vite)

Tailwind CSS (v3 – stable)

JavaScript (ES6+)

React Router DOM

LocalStorage (for data persistence)

❌ No UI libraries were used (as per assessment guidelines).

📂 Project Structure
src/
 ├── components/
 │    ├── Sidebar.jsx
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── BlogForm.jsx
 │    ├── BlogTable.jsx
 │    └── Pagination.jsx
 │
 ├── pages/
 │    ├── Dashboard.jsx
 │    └── Blogs.jsx
 │
 ├── hooks/
 │    └── useLocalStorage.js
 │
 ├── utils/
 │    ├── constants.js
 │    └── imageValidator.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css


This structure ensures:

Separation of concerns

Code readability

Scalability and maintainability

✨ Core Features
✔ Blog CRUD Operations

Create, read, and soft-delete blog posts

Blog fields include:

Title

Author

Category

Status (Draft / Published)

Image

Created Date

✔ Image Upload & Validation

Only JPG / PNG formats allowed

Maximum file size: 1 MB

Image preview before submission

User-friendly error messages for invalid uploads

✔ Pagination (Mandatory)

Displays 5 blog posts per page

Pagination state maintained during search and filtering

Persistent after page refresh

✔ Search & Filters

Search by title or author

Filter by category

Filter by status

Search and filters work together seamlessly

✔ LocalStorage Persistence

All blog data is saved in LocalStorage

Data remains intact after page refresh

Implemented via a reusable custom hook

🧠 Brain Task Implemented
Soft Delete + Auto Purge

Blog posts are soft-deleted by marking them with a timestamp

Soft-deleted posts are hidden from the UI

Posts are automatically purged after 24 hours

Reason for choosing this approach:
This mirrors real-world systems where deleted data is temporarily retained for recovery, auditing, or rollback purposes before permanent removal.

⚡ Quick Logic Task Implemented

Derived count display for total filtered blog posts

Persistent pagination behavior

Controlled save action with proper validation

📱 Responsive Design

Fully responsive admin layout

Sidebar and navbar adapt across screen sizes

Mobile-safe UI without layout breaks

🧪 Error Handling

Required field validation

Invalid image format/size handling

Graceful handling of empty search/filter results

▶️ How to Run Locally
# Clone the repository
git clone <your-github-repository-link>

# Navigate to the project directory
cd blog-admin-dashboard

# Install dependencies
npm install

# Start development server
npm run dev


Open in browser:
http://localhost:5173