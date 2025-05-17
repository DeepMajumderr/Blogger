import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogContext } from "../context/blogContext";

const Home = () => {
  const navigate = useNavigate();
  const {
    fetchBlogs,
    allBlogs,
    currentPage,
    totalPages,
    loading,
  } = useBlogContext();

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      fetchBlogs(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : allBlogs.length === 0 ? (
        <p className="text-gray-500">No blogs available yet</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allBlogs.map((blog) => (
              <div
                key={blog._id}
                onClick={() => handleBlogClick(blog._id)}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
                  <div className="text-gray-600 mb-4 relative">
                    <div className="line-clamp-[6] h-[7.5rem] overflow-hidden">
                      {blog.content}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBlogClick(blog._id);
                    }}
                  >
                    Read full blog →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2">
            <button
              className={`px-3 py-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
