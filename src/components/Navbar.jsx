import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex space-x-12">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/paste" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Pastes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar