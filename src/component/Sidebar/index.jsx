import '../Sidebar/index.scss'
import Logos from '../../assets/images/logoPre.png'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo__sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope,  } from '@fortawesome/free-solid-svg-icons'
import {MarkGithubIcon} from '@primer/octicons-react'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logoSubTitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li> 
          <a href="https://github.com/namansingh98" rel="rereferre" target="_blank">
          <MarkGithubIcon size={18} style={{color:"#4d4d4e"}} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
