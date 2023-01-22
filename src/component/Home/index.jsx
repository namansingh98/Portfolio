import Logo from '../../assets/images/logo-n.png'
import '../Home/index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ALogo from './Logo'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'm', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    's',
    'i',
    'g',
    'n',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}> i ,</span>
          <br />
          <span className={`${letterClass} _13`}> I'</span>
          <span className={`${letterClass} _14`}> m</span>
          <img src={Logo} alt="developer" />
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={nameArray}
            id={15}
          />

          <br />
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={jobArray}
            id={25}
          />
        </h1>
        <h2 style={{color:'white'}}>Frontend Developer / UX/UI Designer</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <ALogo />
    </div>
  )
}
export default Home
