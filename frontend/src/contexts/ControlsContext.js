import { createContext, useState } from "react"
import { controls } from '../components/controls'

export const ControlsContext = createContext()

export default function ControlsProvider({ children }) {
  const [ control, setControl ] = useState(controls['startGame'])

  function changeControls(newControls) {
    typeof newControls === "string"
    ? setControl(controls[newControls])
    : setControl(newControls)
  }

  return <ControlsContext.Provider value={{ control, changeControls }}>
    { children }
  </ControlsContext.Provider>
}