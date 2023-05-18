import { createContext, useState } from "react"
import { menus } from '../components/menus'

export const DisplayContext = createContext()

export default function DisplayProvider({ children }) {
  const [ display, setDisplay ] = useState(menus['main'])

  function ChangeDisplay(menu) {
    setDisplay(menus[menu])
  }

  return <DisplayContext.Provider value={{ display, ChangeDisplay }}>
    { children }
  </DisplayContext.Provider>
}