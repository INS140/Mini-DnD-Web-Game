import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
import DisplayProvider from './contexts/DisplayContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DisplayProvider>
      <Game />
    </DisplayProvider>
  </React.StrictMode>
)