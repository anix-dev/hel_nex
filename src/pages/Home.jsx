import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Helmsman Nexus</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          A modern React application with Tailwind CSS and React Router
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">React 18</h3>
            <p className="text-gray-600">Built with the latest React features including hooks and concurrent rendering.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tailwind CSS</h3>
            <p className="text-gray-600">Utility-first CSS framework for rapid UI development with custom design.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vite</h3>
            <p className="text-gray-600">Next generation frontend tooling with instant server start and fast HMR.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Login to Dashboard
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl"
          >
            View Dashboard
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">2.4s</p>
              <p className="text-gray-600">Load Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">100%</p>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;