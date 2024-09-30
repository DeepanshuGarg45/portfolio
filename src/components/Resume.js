import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Resume</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          I have a strong background in data science and analytics, with hands-on experience in various projects. 
          Below are some highlights of my skills and experiences:
        </p>
        <ul className="mt-6 text-gray-300">
          <li>- Proficient in Python, R, and SQL</li>
          <li>- Experienced in machine learning algorithms</li>
          <li>- Skilled in data visualization using tools like Tableau and Matplotlib</li>
          <li>- Strong analytical and problem-solving skills</li>
        </ul>
        <a 
          href="/path/to/your/resume.pdf" // Update with the actual path to your resume
          className="mt-5 inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;