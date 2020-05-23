import React, { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import styled, { createGlobalStyle } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'

const GloabalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }
`

const App = () => {
  // Text showed on initial animations
  const [currentText, setCurrentText] = useState('Just another portifolio')
  const [pageStatus, setPageStatus] = useState('start-animation')
  const [startScrollAnimations, setStartScrollAnimations] = useState(false)

  // Execute start timeline
  useEffect(() => {
    if (pageStatus === 'start-animation') {
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
          targets: 'path',
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.animation-container',
          duration: 1500,
          rotate: 77,
          translateX: -200,
          scale: 50,
          changeComplete: () => {
            //Restore scroll possibility
            const body = document.querySelector('body')
            body.style.overflow = 'auto'
            body.style.backgroundColor = 'black'
            setPageStatus('content')
          },
        })
    }
    if (pageStatus === 'content') {
      const contentTimeline = anime.timeline({
        easeing: 'linear',
      })

      contentTimeline.add({
        targets: 'h1',
        delay: 1500,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 3000,
      })
    }
  }, [pageStatus])

  return (
    <React.Fragment>
      <GloabalStyle />
      {pageStatus === 'start-animation' ? (
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
      ) : (
        <div>
          <Controller>
            <Scene
              offset={1}
              triggerHook='onLeave'
              reverse={true}
              indicators
              globalSceneOptions={{ triggerHook: 'onEnter' }}
              duration={0}
              pin
            >
              {(a, b, c) => {
                if (a) {
                  anime({
                    targets: '#initial-scroll',
                    translateX: [200, 0],
                    opacity: [0, 1],
                  })
                  setStartScrollAnimations(true)
                } else if (startScrollAnimations) {
                  anime({
                    targets: '#initial-scroll',
                    translateX: [0, 200],
                    opacity: [1, 0],
                  })
                }
                return <div />
              }}
            </Scene>
          </Controller>

          <div>
            <div id='initial-scroll' style={{ height: 300, width: 20, backgroundColor: 'blue', opacity: 0 }} />
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <Controller>
              <Scene
                offset={300}
                triggerHook='onEnter'
                reverse={true}
                indicators
                globalSceneOptions={{ triggerHook: 'onEnter' }}
                duration={0}
                pin
              >
                {(a, b, c) => {
                  if (a) {
                    anime({
                      targets: '#teste-scroll',
                      translateX: [200, 0],
                      opacity: [0, 1],
                    })
                    setStartScrollAnimations(true)
                  } else if (startScrollAnimations) {
                    anime({
                      targets: '#teste-scroll',
                      translateX: [0, 200],
                      opacity: [1, 0],
                    })
                  }
                  return <div />
                }}
              </Scene>
            </Controller>
            <div id='teste-scroll' style={{ height: 300, width: 20, backgroundColor: 'orange', opacity: 0 }} />
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
            <h1 style={{ opacity: 0, color: 'white' }}>a</h1>
          </div>
        </div>
      )}
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
