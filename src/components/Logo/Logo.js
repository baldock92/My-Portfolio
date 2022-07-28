import './Logo.scss'
import gLogo from '../../assets/images/backgroundG.png'

import { useRef } from 'react'

export default function Logo() {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img src={gLogo} className="solid-logo" alt="logo" ref={solidLogoRef} />
    </div>
  )
}
