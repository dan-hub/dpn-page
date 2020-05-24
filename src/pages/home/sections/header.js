import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import anime from 'animejs/lib/anime.es.js'

import cover from '../../../assets/cover.jpg'

const video_stock = 'https://assets.mixkit.co/videos/preview/mixkit-traffic-in-an-underground-tunnel-4067-large.mp4'

const Header = () => {
  const [breakText, setBreakText] = useState(true)

  return (
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
            setBreakText(!a)
            return <div />
          }}
        </Scene>
      </Controller>

      <div>
        <HeaderContainer isTranslated={!breakText}>
          <video muted='muted' loop='loop' autoplay='autoplay' src={video_stock} class='background' cover={cover} />
          <video muted='muted' loop='loop' autoplay='autoplay' cover={cover}>
            <source src={video_stock} />
          </video>
          <AnimatedTitle>
            <TitleFragment breakText={breakText && '0'} size={70} offset={0} class='column-1'>
              <h1>DANIEL</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '30vw'} size={140} offset={70} class='column-3'>
              <h1>DANIEL</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '70vw'} size={300} offset={140 + 70} class='column-4'>
              <h1>DANIEL</h1>
            </TitleFragment>
          </AnimatedTitle>
          <AnimatedTitle style={{ marginLeft: 100 }}>
            <TitleFragment breakText={breakText && '0'} size={70} offset={0} class='column-1'>
              <h1>PORTO</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '15vw'} size={140} offset={70} class='column-3'>
              <h1>PORTO</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '45vw'} size={300} offset={140 + 70} class='column-4'>
              <h1>PORTO</h1>
            </TitleFragment>
          </AnimatedTitle>
          <AnimatedTitle>
            <TitleFragment breakText={breakText && '0'} size={150} offset={0} class='column-1'>
              <h1>NUNEZ</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '24vw'} size={55} offset={150} class='column-3'>
              <h1>NUNEZ</h1>
            </TitleFragment>
            <TitleFragment breakText={breakText && '44vw'} size={300} offset={150 + 55} class='column-4'>
              <h1>NUNEZ</h1>
            </TitleFragment>
          </AnimatedTitle>
        </HeaderContainer>
      </div>
    </div>
  )
}

const AnimatedTitle = styled.div`
  margin: 0 50px;
  display: flex;
  width: 100%;
  height: 170px;
  overflow: hidden;
`

const TitleFragment = styled.div`
  transition: transform 1s ease-in-out;
  overflow: hidden;
  position: relative;
  width: ${({ size }) => size}px;
  color: white;
  font-size: 70px;
  font-family: Arial, Helvetica, sans-serif;
  ${({ breakText }) =>
    breakText
      ? `
    transform: translateX(${breakText});
  `
      : ''}
  h1 {
    left: ${({ offset }) => -offset}px;
    position: absolute;
    font-family: 'Roboto';
    font-weight: 900;
    margin: 0;
  }

  @media only screen and (max-width: 1279px) {
    font-size: 4;
  }
`

const opacityInitial = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  video {
    ${({ isTranslated }) =>
      isTranslated ? 'transform: scale(.68) rotateY(-16deg) rotateX(16deg) rotate(-1deg);' : 'transform: scale(1);'}
    transform-origin: center right;
    min-width: 100%;
    max-width: 100%;
    position: absolute;
    transition: all 1s ease;
    opacity: 0;
    animation: ${opacityInitial} ease 1s 1s forwards;
    &.background {
      transform: scale(3);
      transform-origin: center;
      filter: blur(14px);
      @media only screen and (min-width: 1280px) {
        display: none;
      }
    }
  }
`

export default Header
