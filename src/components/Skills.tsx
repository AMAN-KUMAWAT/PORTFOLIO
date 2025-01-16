import React from 'react';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-gray-800">{skill}</div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java'],
    'Mobile Development': ['Flutter', 'Dart', 'Mobile App Development'],
    'Databases': ['MySQL', 'MongoDB'],
    'Professional Skills': ['UI/UX Design', 'Freelancing', 'Problem Solving'],
    'Experience': ['1 Year Freelancing', 'Mobile App Development', 'Full Stack Development']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;