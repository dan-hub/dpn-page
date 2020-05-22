import React, { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import styled, { createGlobalStyle } from 'styled-components'

const GloabalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }
`

const App = () => {
  // Text showed on initial animations
  const [currentText, setCurrentText] = useState('Just another portifolio')

  // Execute timeline
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'linear',
    })
    timeline
      .add({
        targets: '.animation-container h1',
        keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }],
        duration: 4000,
        changeComplete: function() {
          setCurrentText('But with a lot of animations')
        },
      })
      .add({
        targets: '.animation-container h1',
        keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }],
        duration: 4000,
        changeComplete: function() {
          setCurrentText('')
        },
      })
      .add({
        targets: '.animation-container path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(.1,.69,.93,.65)',
        duration: 4000,
        delay: 1000,
        direction: 'alternate',
      })
      .add({
        targets: '.animation-container',
        duration: 1500,
        rotate: 90,
        translateX: -200,
        scale: 24,
      })
  }, [])

  return (
    <React.Fragment>
      <GloabalStyle />
      <AnimationContainer className='animation-container'>
        <h1>{currentText}</h1>
        <svg width='799.9999999999999' height='600' xmlns='http://www.w3.org/2000/svg'>
          <path
            stroke='black'
            d='m411.563668,116.628393l-0.97417,307.38946c-153.89595,0.3316 -150.75319,-152.67257 2.13913,-152.49492c152.89232,0.17765 161.805001,-132.85821 7.752241,-134.02089'
            opacity='1'
            fill-opacity='null'
            stroke-opacity='null'
            stroke-width='42'
            fill='none'
          />
        </svg>
      </AnimationContainer>
    </React.Fragment>
  )
}

const AnimationContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: black;
  h1 {
    opacity: 0;
  }
  > * {
    margin: auto;
    position: absolute;
  }
`

export default App
