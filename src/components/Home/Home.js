import React from 'react'
import Gtitle from '../../assets/images/G-logo.png'
import {Link} from "react-router-dom"
import "./Home.scss"


export default function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Gtitle} alt="developer" />
          eorge
          <br />
          Aspiring full-stack software developer
        </h1>
        <h2>Full stack software devloper</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}
