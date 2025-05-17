import { useState } from "react"
import { useBlogContext } from "../context/blogContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function Signup() {
  const {  token, settoken, backendUrl } = useBlogContext()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Sending the POST request to register the user
      const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });

      if (response.data.success) {
        // Store the token in the context and local storage
        settoken(response.data.token);
        localStorage.setItem('token', response.data.token);

       
        // Navigate to the home page after successful signup
        navigate("/");

        toast.success("Signup successful! Welcome to the Blogger.");
      } else {
        // If the signup fails, display the error message
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occur during the signup process
      toast.error("An error occurred during signup. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md my-30 mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
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
          Signup
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}