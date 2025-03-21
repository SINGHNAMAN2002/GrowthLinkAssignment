import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate web developer with expertise in creating responsive and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring creative ideas to life through clean and efficient code.</p>
            <p>My journey in web development started with a curiosity for creating beautiful user experiences, and it has evolved into a professional career where I help businesses establish their online presence.</p>
          </div>
          <div className="about-image">
            <img src="/images/naman3.png" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
