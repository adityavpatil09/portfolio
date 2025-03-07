import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Edit } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Blogs</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Read insightful articles and blog posts on various topics related to civil engineering and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Structural Engineering Blog Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <BookOpen className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Structural Engineering</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Insights and advancements in structural engineering practices.
          </p>
        </motion.div>

        {/* Construction Technology Blog Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <PenTool className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Construction Technology</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Exploring the latest technological advancements in the construction industry.
          </p>
        </motion.div>

        {/* Project Management Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Edit className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Project Management</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Best practices and strategies for effective project management in construction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
