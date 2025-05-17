import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from "../context/blogContext";
import axios from 'axios';

const BlogDetail = () => {
  const { backendUrl } = useBlogContext();
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/blog/single/${id}`);
        if (response.data.success) {
          setBlog(response.data.blog);
        } else {
          setError(response.data.message || "Failed to load blog");
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [backendUrl, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-blue-500 text-lg font-semibold">
        Loading blog...
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-lg font-semibold">
        {error || "Blog not found"}
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
