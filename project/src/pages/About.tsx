import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn more about my background, education, and professional experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Personal Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <User className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Personal Information</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Dedicated civil engineer with a passion for innovative construction solutions.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <GraduationCap className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Bachelor's degree in Civil Engineering from a reputable university.
          </p>
        </motion.div>

        {/* Professional Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Briefcase className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Hands-on experience in project management, structural design, and site supervision.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
