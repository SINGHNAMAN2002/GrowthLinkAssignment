import React from 'react';

const Skills = () => {
  const skills = [
    { icon: "💻", name: "HTML5" },
    { icon: "🎨", name: "CSS3" },
    { icon: "⚙️", name: "JavaScript" },
    { icon: "🚀", name: "React" },
    { icon: "🌐", name: "Node.js" },
    { icon: "📱", name: "Responsive Design" }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
