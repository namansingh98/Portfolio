import React, { useState,useEffect } from 'react'
import '../About/index.scss'
import AnimatedLetters from '../AnimatedLetters'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
  return (
    <div className="container about">
      <div className="text-zone">
        <h1>
          <AnimatedLetters lettersClass={letterClass}
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
    </div>
  )
}

export default About
