import React, { useEffect, useState } from 'react'
import { Home } from './pages'
import { createGlobalStyle } from 'styled-components'

const GloabalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }
`

const App = () => {
  return (
    <React.Fragment>
      <GloabalStyle />
      <Home />
    </React.Fragment>
  )
}

export default App
