import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, RadioReceiver } from 'lucide-react';

const Electronics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Electronics Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Exploring innovative electronics projects, circuit designs, and embedded systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Circuit Design Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Cpu className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Circuit Design</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Designing and simulating electronic circuits for various applications.
          </p>
        </motion.div>

        {/* Embedded Systems Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Sparkles className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Embedded Systems</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Developing embedded systems for real-time applications and control systems.
          </p>
        </motion.div>

        {/* Wireless Communication Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <RadioReceiver className="h-10 w-10 text-custom-darker-orange dark:text-custom-light-orange mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Wireless Communication</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Implementing wireless communication protocols and systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Electronics;
