import { createContext, useEffect, useState } from "react"

export const CombatElementsContext = createContext()

export default function CombatElementsProvider({ children }) {
  const [ visible, setVisibility ] = useState(false)

  return <CombatElementsContext.Provider value={{ visible, setVisibility }}>
    { children }
  </CombatElementsContext.Provider>
}