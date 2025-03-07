import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About Me
          </motion.h1>
          <motion.p 
            className="text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovator, Engineer, Problem Solver
          </motion.p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Formal Education</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-custom-darker-orange mr-2">•</span>
                  <div>
                    <p className="font-semibold">Bachelor of Engineering in Civil Engineering</p>
                    <p className="text-gray-600">Currently Pursuing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-darker-orange mr-2">•</span>
                  <div>
                    <p className="font-semibold">Diploma in Electronics & Communication</p>
                    <p className="text-gray-600">Completed with Distinction</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Professional Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-custom-darker-orange mr-2">•</span>
                  <div>
                    <p className="font-semibold">Harvard University</p>
                    <p className="text-gray-600">Python for IoT & AI</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-darker-orange mr-2">•</span>
                  <div>
                    <p className="font-semibold">NIIT</p>
                    <p className="text-gray-600">C++ for Embedded Systems</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <ul className="space-y-2">
                <li>• Python</li>
                <li>• C/C++</li>
                <li>• Embedded C</li>
                <li>• PLC Programming</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Civil Engineering</h3>
              <ul className="space-y-2">
                <li>• AutoCAD</li>
                <li>• Revit</li>
                <li>• Structural Analysis</li>
                <li>• Project Management</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Electronics</h3>
              <ul className="space-y-2">
                <li>• Circuit Design</li>
                <li>• IoT Development</li>
                <li>• Microcontrollers</li>
                <li>• PCB Design</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Freelance Technical Consultant</h3>
              <p className="text-gray-600 mb-4">2020 - Present</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Developed IoT solutions for smart home automation</li>
                <li>• Implemented BIM workflows for construction projects</li>
                <li>• Created custom automation solutions for clients</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Technical Project Lead</h3>
              <p className="text-gray-600 mb-4">2018 - 2020</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Led team of 5 developers for IoT projects</li>
                <li>• Managed client relationships and project delivery</li>
                <li>• Implemented quality control processes</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
