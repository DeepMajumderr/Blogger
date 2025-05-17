import { useState } from "react"
import { useBlogContext } from "../context/blogContext"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const { settoken, backendUrl } = useBlogContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sending the POST request to login the user
      const response = await axios.post(backendUrl + '/api/user/login', { email, password });

      if (response.data.success) {
        // Store the token in the context and local storage
        settoken(response.data.token);
        localStorage.setItem("token", response.data.token);


        // Navigate to the home page after successful login
        navigate("/");

        // Optionally, show success message
        toast.success("Login successful!");
      } else {
        // If the login fails, display the error message
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occur during the login process
      toast.error("An error occurred during login. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md my-30 mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          Login
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            New user?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}