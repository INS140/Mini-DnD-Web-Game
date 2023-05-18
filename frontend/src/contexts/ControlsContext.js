import { createContext, useState } from "react"
import { controls } from '../components/controls'

export const ControlsContext = createContext()

export default function ControlsProvider({ children }) {
  const [ control, setControl ] = useState(controls['startGame'])

  function ChangeControls(newControls) {
    setControl(controls[newControls])
  }

  return <ControlsContext.Provider value={{ control, ChangeControls }}>
    { children }
  </ControlsContext.Provider>
}