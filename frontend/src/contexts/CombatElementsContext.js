import { createContext, useState } from "react"

export const CombatElementsContext = createContext()

export default function CombatElementsProvider({ children }) {
  const [ visible, setVisibility ] = useState(false)
  const [ targetSelect, setTargetSelect ] = useState(false)

  function toggleVisibility() {
    setVisibility(prev => !prev)
  }

  function toggleTargetSelect() {
    setTargetSelect(prev => !prev)
  }

  return <CombatElementsContext.Provider value={{ visible, toggleVisibility, targetSelect, toggleTargetSelect }}>
    { children }
  </CombatElementsContext.Provider>
}