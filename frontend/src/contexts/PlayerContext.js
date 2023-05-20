import { createContext, useState } from "react"

export const PlayerContext = createContext()

export default function PlayerProvider({ children }) {
  const [ player, setPlayer ] = useState([])

  return <PlayerContext.Provider value={{ player, setPlayer }}>
    { children }
  </PlayerContext.Provider>
}

// Defines actual user that will eventually login