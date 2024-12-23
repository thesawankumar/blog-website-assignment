import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown state
  const navigate = useNavigate();

  // Check token on mount and listen for changes in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("token");
      setIsLoggedIn(!!updatedToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home or login page
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-bold text-white hover:text-gray-300"
            >
              Inkspire
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                  >
                    Create
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                      <Link to="/create">
                        <button className="block w-full text-white px-4 py-2 text-left hover:bg-gray-700">
                          Create Post
                        </button>
                      </Link>
                      <Link to="/all-posts">
                        <button className="block w-full text-white px-4 py-2 text-left hover:bg-gray-700">
                          All Posts
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" aria-hidden={!isMenuOpen}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </a>
          </div>
          <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-left"
                  >
                    Create
                  </button>
                  {isMobileDropdownOpen && (
                    <div className="mt-2 w-full bg-gray-800 rounded-md shadow-lg">
                      <Link to="/create">
                        <button className="block w-full text-white px-4 py-2 text-left hover:bg-gray-700">
                          Create Post
                        </button>
                      </Link>
                      <Link to="/all-posts">
                        <button className="block w-full text-white px-4 py-2 text-left hover:bg-gray-700">
                          All Posts
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-center">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
