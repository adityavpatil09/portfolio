import React from 'react';
import { motion } from 'framer-motion';
import { Building, ClipboardList, DraftingCompass } from 'lucide-react';

const Civil: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Civil Engineering Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Showcasing expertise in structural design, sustainable construction, and project management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Structural Design Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Building className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Structural Design</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Detailed designs and analyses of various building structures.
          </p>
        </motion.div>

        {/* Project Management Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <ClipboardList className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Project Management</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Efficient planning, execution, and supervision of construction projects.
          </p>
        </motion.div>

        {/* Sustainable Construction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <DraftingCompass className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Sustainable Construction</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Implementing eco-friendly practices and materials in construction projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Civil;
