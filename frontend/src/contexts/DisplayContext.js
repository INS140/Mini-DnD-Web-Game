import { createContext, useState } from "react"
import { displays } from '../components/displays'

export const DisplayContext = createContext()

export default function DisplayProvider({ children }) {
  const [ display, setDisplay ] = useState(displays['menu'])

  function changeDisplay(newDisplay) {
    setDisplay(displays[newDisplay])
  }

  return <DisplayContext.Provider value={{ display, changeDisplay }}>
    { children }
  </DisplayContext.Provider>
}