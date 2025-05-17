import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BlogDetail from "./pages/BlogDetail"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import MyBlogs from "./pages/MyBlogs"
import CreateBlog from "./pages/CreateBlog"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation()

  // Hide the Navbar on Login and Signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />

          {/* Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </div>

      {/* Toast Notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
