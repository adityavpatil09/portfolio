import React from 'react';
import { motion } from 'framer-motion';

const Civil = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-custom-darker-orange text-white">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Civil Engineering & Smart Construction
          </motion.h1>
          <motion.p 
            className="text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionizing Construction with BIM, AI & Automation
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Expertise & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">BIM & 3D Modeling</h3>
              <ul className="space-y-2">
                <li>• Autodesk Revit</li>
                <li>• Navisworks</li>
                <li>• 3D Coordination</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Project Management</h3>
              <ul className="space-y-2">
                <li>• Cost Estimation</li>
                <li>• Schedule Planning</li>
                <li>• Resource Optimization</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Smart Construction</h3>
              <ul className="space-y-2">
                <li>• IoT Integration</li>
                <li>• Automated Monitoring</li>
                <li>• Data Analytics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                alt="Commercial Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Complex</h3>
                <p className="text-gray-600">Smart building management system implementation</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Residential Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Residential Tower</h3>
                <p className="text-gray-600">Automated construction monitoring system</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Infrastructure Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Infrastructure Project</h3>
                <p className="text-gray-600">IoT-based monitoring and maintenance</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Civil;
