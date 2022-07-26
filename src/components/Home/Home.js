import React, { useState, useEffect } from 'react';
import Gtitle from '../../assets/images/G-logo.png';
import { Link } from 'react-router-dom';
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Loader } from 'react-loaders';
import mePic from '../../assets/images/Me.png';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'eorge,'.split('');
  const jobArray = 'Software'.split('');
  const jobArray2 = 'Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="home-pic">
          <img className="home-pic-me" src={mePic} alt="Myself" />
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Gtitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={22}
            />
          </h1>
          <h2>Full stack software developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
