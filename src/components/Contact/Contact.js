import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import mePic from '../../assets/images/Me.png'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [phoneNum, setPhoneNum] = useState('Give me a call')
  const [email, setEmail] = useState('Why not send me an email?')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="overall-contact">
      <div className="container contact-page">
        <div className="text-zone" id="divider">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p id="contact-info">
            Please don't hesitate to contact me with any opportunities for work,
            project ideas, or general questions.
            <br /> . . . <br />
            You can do so by giving me a call, sending me and email or reaching
            out on<span> </span>
            <a
              id="linkedin-link"
              target="blank"
              href="https://www.linkedin.com/in/george-baldock-88749a240/"
            >
              LinkedIn.
            </a><br /> . . . <br />
            I'm based in Solihull, UK, but I am willing to relocate for the right offer.
          </p>
          
          <div className="contact-icons-container">
            <div
              className="phone-info"
              onClick={() => {
                setPhoneNum('07754373395')
              }}
            >
              <FontAwesomeIcon className="contact-icon phone" icon={faPhone} />
              <h2 className="display-contact">{phoneNum}</h2>
            </div>
            <div
              onClick={() => {
                setEmail('george_baldock@hotmail.co.uk')
              }}
              className="email-info"
            >
              <FontAwesomeIcon
                className="contact-icon email"
                icon={faEnvelope}
              />
              <h2 className="display-contact">{email}</h2>
            </div>
          </div>
        </div>
        <div className="info-pic">
          <img className="photo-me" src={mePic} alt="Myself" />
        </div>
        <Loader type="pacman" />
      </div>
    </div>
  )
}
