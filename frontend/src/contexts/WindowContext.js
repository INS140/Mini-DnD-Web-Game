import { createContext, useState } from "react"
import { windows } from '../components/windows'

export const WindowContext = createContext()

export default function WindowProvider({ children }) {
  const [ window, setWindow ] = useState(windows['menu'])

  function changeWindow(newWindow) {
    setWindow(windows[newWindow])
  }

  return <WindowContext.Provider value={{ window, changeWindow }}>
    { children }
  </WindowContext.Provider>
}