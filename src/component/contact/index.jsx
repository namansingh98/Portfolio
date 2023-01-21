import Loader from "react-loaders";
import "../contact/index.scss"
import AnimatedLetters from "../AnimatedLetters"

import React, { useState,useEffect } from 'react'

const index = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  return (
    <>
    <div className="container contact" >
<div className="text-zone">
<h1>
    <AnimatedLetters styArray={["C","o","n","t","a","c","t"," ","m","e"]}
    idx={15}
    lettersClass={letterClass}
    />
</h1>
</div>
    </div>
    <Loader type="pacman"/>
    </>  )
}

export default index