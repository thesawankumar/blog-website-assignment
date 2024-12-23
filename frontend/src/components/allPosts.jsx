import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/posts/all-posts`
        );
        setPosts(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "An error occurred while fetching posts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleUpdate = (id) => {
    // Navigate to the update page or open a modal for editing
    navigate(`/update-post/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-blue-500 text-lg font-medium">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg p-6 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          All Posts
        </h1>
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {post.content.length > 100
                      ? `${post.content.substring(0, 100)}...`
                      : post.content}
                  </p>
                  <p className="text-gray-500 text-xs">
                    <span className="font-semibold">Summary:</span>{" "}
                    {post.summary}
                  </p>
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleUpdate(post._id)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(post._id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
