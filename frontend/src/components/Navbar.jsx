import { NavLink, useNavigate } from "react-router-dom"
import { useBlogContext } from "../context/blogContext"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const navigate = useNavigate()
  const {  token, settoken } = useBlogContext()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    settoken('')
    navigate("/")
  }

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 ${isActive ? "border-b-2 border-white" : "text-gray-300 hover:text-white"}`

  return (
    <nav className="bg-black text-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 lg:absolute lg:left-10">
            <NavLink to="/" className="text-2xl font-bold text-white">Blogger</NavLink>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              {token && <NavLink to="/my-blogs" className={navLinkClass}>My Blogs</NavLink>}
              {token && <NavLink to="/create" className={navLinkClass}>Create</NavLink>}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex lg:absolute lg:right-10">
            <div className="flex items-center space-x-4">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-300 w-24"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink to="/login" className={navLinkClass}>Login</NavLink>
                  <NavLink to="/signup" className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300">
                    Signup
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 pb-3 px-2 pt-2">
          <div className="space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block px-3 py-2 ${isActive ? "border-l-4 border-white" : "text-gray-300"}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            {token && (
              <NavLink 
                to="/my-blogs" 
                className={({ isActive }) => `block px-3 py-2 ${isActive ? "border-l-4 border-white" : "text-gray-300"}`}
                onClick={() => setMenuOpen(false)}
              >
                My Blogs
              </NavLink>
            )}
            {token && (
              <NavLink 
                to="/create" 
                className={({ isActive }) => `block px-3 py-2 ${isActive ? "border-l-4 border-white" : "text-gray-300"}`}
                onClick={() => setMenuOpen(false)}
              >
                Create
              </NavLink>
            )}
          </div>
          <div className="pt-4 pb-2 border-t border-gray-700">
            {token ? (
              <button
                onClick={() => {
                  handleLogout()
                  setMenuOpen(false)
                }}
                className="block w-24 px-4 py-2 text-left text-white border border-white rounded-md hover:bg-white hover:text-black transition"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => `block px-3 py-2 ${isActive ? "border-l-4 border-white" : "text-gray-300"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink 
                  to="/signup" 
                  className="block mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}