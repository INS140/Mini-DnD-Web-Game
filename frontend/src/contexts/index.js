import WindowProvider from "./WindowContext"
import MenuProvider from "./MenuContext"
import ControlsProvider from "./ControlsContext"
import MonsterProvider from "./MonsterContext"
import CombatElementsProvider from "./CombatElementsContext"

export default function ContextProvider({ children }) {
  return <>
    <WindowProvider>
    <MenuProvider>
    <ControlsProvider>
    <MonsterProvider>
    <CombatElementsProvider>
      { children }
    </CombatElementsProvider>
    </MonsterProvider>
    </ControlsProvider>
    </MenuProvider>
    </WindowProvider>
  </>
}