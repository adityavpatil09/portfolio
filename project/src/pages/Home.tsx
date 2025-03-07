import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Code, Terminal, Wrench } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore my projects and learn more about my skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Civil Engineering Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Building2 className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Civil Engineering</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover innovative solutions in structural design and sustainable construction.
          </p>
        </motion.div>

        {/* Electronics Projects Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Code className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Electronics Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore cutting-edge electronics projects and circuit designs.
          </p>
        </motion.div>

        {/* Tools & Technologies Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Wrench className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Tools & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Proficient in AutoCAD, Revit, and various programming languages.
          </p>
        </motion.div>

        {/* Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Terminal className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Command Line Interface</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comfortable navigating and utilizing the command line for various tasks.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
