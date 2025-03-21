import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">Naman's Portfolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
