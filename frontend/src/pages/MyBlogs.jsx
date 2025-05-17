import React, { useState, useEffect } from 'react';
import { useBlogContext } from "../context/blogContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyBlogs = () => {
  const { token, backendUrl, fetchBlogs } = useBlogContext();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

  // Fetch user's blogs
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/user/myBlogs`,
          {},
          {
            headers: {
              token
            }
          }
        );

        if (response.data.success) {
          setBlogs(response.data.blogs.reverse());
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch your blogs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchMyBlogs();
    }
  }, [token, backendUrl]);

  // Update a blog
  const handleUpdate = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/blog/update`,
        {
          id,
          title: editForm.title,
          content: editForm.content
        },
        {
          headers: {
            token
          }
        }
      );

      if (response.data.success) {
        setBlogs(blogs.map(blog =>
          blog._id === id ? { ...blog, ...editForm } : blog
        ));
        setEditingId(null);
        toast.success("Blog updated successfully");
        fetchBlogs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update blog");
      console.error(error);
    }
  };

  // Delete a blog - Updated version with ID in request body
  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${backendUrl}/api/blog/delete`,
        {
          id
        },
        {
          headers: {
            token
          }
        }
      );

      if (response.data.success) {
        setBlogs(blogs.filter(blog => blog._id !== id));
        toast.success("Blog deleted successfully");
        fetchBlogs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
      console.error(error);
    }
  };

  // Start editing a blog
  const startEditing = (blog) => {
    setEditingId(blog._id);
    setEditForm({ title: blog.title, content: blog.content });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">My Blog Posts</h1>
        <p>Loading your blogs...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">My Blog Posts</h1>
        <p>You haven't created any blogs yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">My Blog Posts</h1>

      <div className="space-y-6">
        {blogs.map(blog => (
          <div key={blog._id} className="border rounded-lg p-4 shadow-sm">
            {editingId === blog._id ? (
              <div>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full p-2 border rounded mb-2"
                />
                <textarea
                  value={editForm.content}
                  onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                  rows="4"
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(blog._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.content}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditing(blog)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;