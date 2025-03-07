import React from 'react';
import { Building2, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/portfolio/" className="flex items-center text-custom-darker-orange hover:text-custom-light-orange transition-colors duration-300">
              <Building2 className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Aditya Patil</span>
            </Link>
            <div className="flex space-x-4">
              <Link
                to="/civil"
                className={`px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ${location.pathname === '/civil' ? 'bg-gray-200 font-semibold' : ''}`}
              >
                Civil
              </Link>
              <Link
                to="/electronics"
                className={`px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ${location.pathname === '/electronics' ? 'bg-gray-200 font-semibold' : ''}`}
              >
                Electronics
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ${location.pathname === '/about' ? 'bg-gray-200 font-semibold' : ''}`}
              >
                About
              </Link>
              <Link
                to="/blogs"
                className={`px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ${location.pathname === '/blogs' ? 'bg-gray-200 font-semibold' : ''}`}
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Building2 className="h-8 w-8 text-custom-light-orange" />
              <span className="ml-2 text-xl font-bold">Aditya Patil</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Aditya Patil - Smart Construction Innovator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
