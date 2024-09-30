import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Predictive Analytics with Machine Learning',
    description: 'A project that leverages predictive models to forecast trends.',
    link: 'https://github.com/your-github/project1',
    image: 'https://source.unsplash.com/featured/?machine-learning',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard to visualize data trends and insights.',
    link: 'https://github.com/your-github/project2',
    image: 'https://source.unsplash.com/featured/?data-visualization',
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Analysis to segment customers based on purchasing behavior.',
    link: 'https://github.com/your-github/project3',
    image: 'https://source.unsplash.com/featured/?customer-analysis',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a href={project.link} className="text-yellow-400 mt-4 block hover:underline">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;