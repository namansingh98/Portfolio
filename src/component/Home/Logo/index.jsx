import './index.scss'
import Logo from '../../../assets/images/logo-n.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const ALogo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, { drawSVG: 0, duration: 20 })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, delay: 4, duration: 4 }
    )
  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" alt="logo" src={Logo} />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="464.000000pt"
        height="581.000000pt"
        viewBox="0 0 464.000000 581.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,581.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
          className="svg-container"
        >
          <path
            ref={outlineLogoRef}
            d="M2514 5420 l-50 -51 -82 35 c-78 34 -82 34 -82 15 0 -28 79 -542 141
-913 107 -647 276 -1525 407 -2114 57 -255 58 -263 39 -273 -10 -6 -22 -7 -27
-2 -4 4 -148 202 -321 438 -239 328 -319 445 -336 491 l-22 62 22 6 c12 3 24
2 27 -3 3 -4 49 -76 103 -158 81 -125 101 -150 117 -146 24 6 24 7 1 74 -13
40 -195 305 -676 984 -362 512 -661 934 -665 938 -4 5 -24 1 -44 -8 -49 -23
-62 -69 -43 -143 12 -45 12 -52 1 -48 -8 3 -100 55 -205 116 -105 60 -194 110
-199 110 -5 0 -79 -39 -165 -87 l-156 -86 5 -36 c3 -20 17 -128 31 -241 166
-1375 432 -2646 752 -3590 48 -142 175 -400 197 -400 13 0 76 20 76 24 0 2
-40 117 -90 257 -49 140 -86 257 -82 261 24 23 36 5 86 -127 96 -254 197 -458
271 -549 23 -28 25 -29 62 -18 l39 12 -1 77 c0 98 28 163 107 248 l55 59 33
-24 c29 -21 32 -21 27 -4 -21 68 -173 650 -252 964 -168 670 -306 1282 -388
1718 -34 182 -34 183 -14 194 16 8 23 7 31 -4 1011 -1335 1501 -2003 1732
-2364 103 -161 112 -180 193 -414 40 -112 73 -206 75 -207 2 -2 25 1 50 7 65
14 122 -1 144 -41 19 -32 21 -33 42 -20 12 8 12 17 -4 66 -10 31 -16 58 -14
59 2 1 24 14 49 29 52 30 104 92 150 180 l32 63 -41 234 c-78 443 -112 698
-112 840 0 74 11 124 23 110 2 -3 57 -217 121 -477 l118 -471 43 15 c25 8 42
20 40 26 -10 28 -190 809 -259 1122 -234 1061 -395 1950 -477 2625 -38 316
-42 335 -85 363 -26 17 -32 26 -26 42 9 25 8 92 -1 101 -8 8 -87 -16 -87 -26
0 -4 11 -61 24 -126 37 -187 36 -174 11 -180 -14 -3 -34 2 -51 13 -16 10 -40
18 -54 18 -21 0 -27 7 -37 45 -25 98 -10 185 38 211 16 8 19 16 14 37 -4 15
-8 28 -10 30 -3 4 -303 82 -313 82 -4 0 -30 -23 -58 -50z m-1902 -2253 c25
-20 30 -35 47 -142 18 -119 17 -134 -14 -135 -6 0 -19 25 -30 56 -15 45 -17
63 -8 95 10 38 9 40 -23 60 -49 30 -59 89 -16 89 9 0 29 -10 44 -23z"
          />
          <path
            d="M2483 2808 c2 -7 71 -114 153 -238 113 -172 153 -225 167 -222 33 7
19 48 -74 209 -100 174 -179 263 -235 263 -9 0 -14 -6 -11 -12z"
          />
        </g>
      </svg>
    </div>
  )
}

export default ALogo
