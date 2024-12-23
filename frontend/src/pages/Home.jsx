import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Welcome to Inkspire</h1>
          <p className="mt-2 text-gray-300">
            Your daily dose of inspiration and stories.
          </p>
        </div>
      </header>

      {/* Featured Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image1}
                alt="Article 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Exploring the Art of Mindfulness
                </h3>
                <p className="mt-2 text-gray-600">
                  Discover how mindfulness can transform your daily life and
                  enhance your well-being.
                </p>
                <a
                  href="/article-1"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image2}
                alt="Article 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  10 Tips for Creative Writing
                </h3>
                <p className="mt-2 text-gray-600">
                  Enhance your writing skills with these practical and inspiring
                  tips for creativity.
                </p>
                <a
                  href="/article-2"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image3}
                alt="Article 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  The Joy of Traveling Solo
                </h3>
                <p className="mt-2 text-gray-600">
                  Embrace the freedom and adventure of exploring new places on
                  your own.
                </p>
                <a
                  href="/article-3"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mt-2 text-gray-300">
            Stay updated with the latest articles, tips, and stories from
            Inkspire.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Inkspire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
