import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-custom-darker-orange text-white">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smart Construction Innovator
          </motion.h1>
          <motion.p 
            className="text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionizing Construction with BIM, AI & Automation
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/civil"
              className="bg-white text-custom-darker-orange px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Civil Engineering
            </Link>
            <Link 
              to="/electronics"
              className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-custom-darker-orange transition-colors duration-300"
            >
              Electronics
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Construction Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Building Management</h3>
                <p className="text-gray-600">Automated systems for efficient building operations and maintenance.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Electronics Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">IoT Security System</h3>
                <p className="text-gray-600">Advanced security solutions using IoT and AI technologies.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Automation Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Construction Automation</h3>
                <p className="text-gray-600">Robotic solutions for construction processes and monitoring.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
