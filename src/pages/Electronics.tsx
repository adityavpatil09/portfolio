import React from 'react';
import { motion } from 'framer-motion';

const Electronics = () => {
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
            Electronics & IoT Solutions
          </motion.h1>
          <motion.p 
            className="text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovating with Embedded Systems, AI, and Cloud Technologies
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Raspberry Pi</h3>
              <ul className="space-y-2">
                <li>NAS Server</li>
                <li>Home Assistant (jarvas)</li>
                <li>Web Hosting</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">ESP8266</h3>
              <ul className="space-y-2">
                <li>Radar</li>
                <li>Water Level Monitor</li>
                <li>Biometric Attendance Machine</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">ESP32 and ESP32 Cam</h3>
              <ul className="space-y-2">
                <li>Security system based on facial recognition</li>
                <li>Home Automation</li>
                <li>Security System</li>
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Home Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Home System</h3>
                <p className="text-gray-600">Voice-controlled home automation</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Security System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Security System</h3>
                <p className="text-gray-600">Facial recognition and monitoring</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="IoT Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Industrial IoT</h3>
                <p className="text-gray-600">Smart monitoring and control</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
