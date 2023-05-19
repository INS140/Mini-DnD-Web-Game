import { createContext, useState } from "react"
import { menus } from '../components/menus'

export const MenuContext = createContext()

export default function MenuProvider({ children }) {
  const [ menu, setMenu ] = useState(menus['main'])

  function changeMenu(newMenu) {
    setMenu(menus[newMenu])
  }

  return <MenuContext.Provider value={{ menu, changeMenu }}>
    { children }
  </MenuContext.Provider>
}