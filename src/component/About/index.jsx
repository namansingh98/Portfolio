import React, { useState, useEffect } from 'react'
import '../About/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import {
  faHtml5,
  faCss3,
  faReact,
  faGithub,
  faJsSquare,faFigma
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
<>
    <div className="container about">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          molestias tempora culpa explicabo fuga ad pariatur nam. Odio minima
          exercitationem magnam. Quisquam blanditiis, molestias esse culpa
          fugiat mollitia maxime odit!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#dd031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="yellow" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGithub} color="dd0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faFigma} color="red" />
          </div>
        </div>
      </div>
   
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About
