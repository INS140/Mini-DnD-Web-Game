import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
import ContextProvider from './contexts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <Game />
  </ContextProvider>
)