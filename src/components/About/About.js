import './About.scss';

import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faHtml5,
  faReact,
  faCss3,
  faNode,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full-stack software developer, looking for a
            role where I can work with existing and new technologies on
            challenging and diverse projects.
          </p>
          <p>
            I'm a confident individual with great communication skills, and love
            working as part of a team.
          </p>
          <p>
            In my free time, I love playing and watching sports, mainly golf,
            football and poker, (although perhaps not a sport!) as well as a
            general love for the great outdoors. Travel is my biggest joy in
            life, and it's my life ambition to see as much of the World as
            possible, with a slice of pizza in one hand as I do.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNode} color="#87bf00" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
