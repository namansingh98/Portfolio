import React, { useEffect, useState,useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import '../contact/index.scss'
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letter, setLetterClass] = useState('text-animate')

const refFrom=useRef()

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 3000)
  }, [])


const sendEmail=(e)=>{
  e.preventDefault()
  emailjs
  .sendForm(
    'service_vmtrsvi',
    'template_tan6pov',
    refFrom.current,
    'E5jfyEOisqrK0AWd-'
  )
  .then(
    ()=>{
      alert('Message sent')
      window.location.reload(false)
    },()=>{
      alert ('Message send failed')
    }
  )
}
  return (
    <>
      <div className="container contact">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={letter}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            veniam eaque excepturi omnis sint quod, reiciendis provident, ab
            aperiam a tempore! Accusantium corporis amet ratione eos aliquam
            mollitia saepe ipsam.

          
          </p>
          <div className="form">
           <form ref={refFrom} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type="text" name="name" placeholder='Name' required/>
              </li>
              <li className='half'>
                <input type="email" placeholder='Enter your email'
                name='email' required/>
              </li>
              
              
              <li className='full'> 
                <input type="text" name="subject" required placeholder='Subject'/>
              </li>
              <li>
                <textarea name="message" placeholder='Enter your Message' required></textarea>
              </li>
              <li>
                <input type="submit" value="send" className='flat-button'/>
              </li>
            </ul>
           </form>
          </div>
        </div>

        <div className="info-map">
          Naman Rathore
          <br />
          862c Sec- F Govind Nagar
          Mathura,
          <br />
          <span>rathorenaman9@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[27.510245, 77.670124]} zoom={13}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
<Marker position={[27.510245, 77.670124]}>
<Popup>Here im Living</Popup>
</Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
