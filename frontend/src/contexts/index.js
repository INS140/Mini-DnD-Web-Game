import DisplayProvider from "./DisplayContext"
import MenuProvider from "./MenuContext"
import ControlsProvider from "./ControlsContext"

export default function ContextProvider({ children }) {
  return <>
    <DisplayProvider>
    <MenuProvider>
    <ControlsProvider>
      { children }
    </ControlsProvider>
    </MenuProvider>
    </DisplayProvider>
  </>
}