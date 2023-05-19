import DisplayProvider from "./DisplayContext"
import MenuProvider from "./MenuContext"
import ControlsProvider from "./ControlsContext"
import MonsterProvider from "./MonsterContext"

export default function ContextProvider({ children }) {
  return <>
    <DisplayProvider>
    <MenuProvider>
    <ControlsProvider>
    <MonsterProvider>
      { children }
    </MonsterProvider>
    </ControlsProvider>
    </MenuProvider>
    </DisplayProvider>
  </>
}