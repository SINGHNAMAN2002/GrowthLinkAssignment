import React, { useState } from 'react';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Recipe Provider System",
      description: "A web application that provides recipes using the Spoonacular API.",
      fullDescription: "The Recipe Provider System is a comprehensive web application that leverages the Spoonacular API to offer users a vast array of recipes...",
      technologies: "HTML5, CSS3, JavaScript, Spoonacular API, Responsive Design",
      link: "#",
      image: "images/spooancular.png"
    },
    {
      title: "Museubot",
      description: "An AI-powered chatbot for enhancing museum experiences.",
      fullDescription: "Museubot is an innovative AI-powered chatbot designed to enhance the museum experience...",
      technologies: "JavaScript, Natural Language Processing, Machine Learning, API Integration",
      link: "#",
      image: "images/museubot.png"
    },
  ];

  const openModal = (index) => {
    setSelectedProject(projects[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => openModal(index)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && selectedProject && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.fullDescription}</p>
              <p><strong>Technologies:</strong> {selectedProject.technologies}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
