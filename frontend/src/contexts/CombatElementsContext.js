import { createContext, useState } from "react"

export const CombatElementsContext = createContext()

export default function CombatElementsProvider({ children }) {
  const [ visible, setVisibility ] = useState(false)
  const [ target, setTarget ] = useState({})
  const [ targetSelect, setTargetSelect ] = useState(false)

  function toggleVisibility() {
    setVisibility(prev => !prev)
  }

  function toggleTargetSelect() {
    setTargetSelect(prev => !prev)
  }

  return <CombatElementsContext.Provider value={{ visible, toggleVisibility, target, setTarget, targetSelect, toggleTargetSelect }}>
    { children }
  </CombatElementsContext.Provider>
}