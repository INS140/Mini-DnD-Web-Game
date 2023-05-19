import { createContext, useState } from "react"

export const MonsterContext = createContext()

export default function MonsterProvider({ children }) {
  const [ monsters, setMonsters ] = useState([])

  return <MonsterContext.Provider value={{ monsters, setMonsters }}>
    { children }
  </MonsterContext.Provider>
}