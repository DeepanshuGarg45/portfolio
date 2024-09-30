import React from 'react';

const skills = ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'];

const Skills = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="flex justify-center mt-6 flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 p-4 m-2 rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;