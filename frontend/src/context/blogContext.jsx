import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [token, settoken] = useState(localStorage.getItem('token') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch blogs with pagination
  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/api/blog/list?page=${page}`);
      if (response.data.success) {
        setAllBlogs(response.data.blogs);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } else {
        toast.error(response.data.message);
        console.error("Error fetching blogs:", response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch blogs");
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on app load
  useEffect(() => {
    fetchBlogs();
  }, [backendUrl]);

  return (
    <BlogContext.Provider
      value={{
        token,
        settoken,
        backendUrl,
        allBlogs,
        setAllBlogs,
        fetchBlogs,
        currentPage,
        totalPages,
        loading
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);