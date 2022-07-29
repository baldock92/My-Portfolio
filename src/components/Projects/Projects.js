import './Projects.scss';
import React, { useState, useEffect } from 'react';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js';
import portfolioData from '../../data/projects.json';

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 2500);
  }, []);

  const renderPortfolio = (projectsData) => {
    return (
      <div className="images-container">
        {projectsData.map((project, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={project.image}
                className="project-image"
                alt="project screenshot"
              />
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <h5 className="tech-stack">{project.techStack}</h5>
                <div className="button-wrapper">
                  <button
                    className="project-button"
                    onClick={() => window.open(project.projectUrl)}
                  >
                    Project
                  </button>
                  <button
                    className="project-button"
                    onClick={() => window.open(project.githubUrl)}
                  >
                    Github
                  </button>
                  
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Projects'.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
