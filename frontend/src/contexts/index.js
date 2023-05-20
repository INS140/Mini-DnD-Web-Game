import WindowProvider from "./WindowContext"
import PlayerProvider from './PlayerContext'
import MenuProvider from "./MenuContext"
import CharacterProvider from './CharacterContext'
import ControlsProvider from "./ControlsContext"
import MonsterProvider from "./MonsterContext"
import CombatElementsProvider from "./CombatElementsContext"

export default function ContextProvider({ children }) {
  return <>
    <WindowProvider>
    <PlayerProvider>
    <MenuProvider>
    <CharacterProvider>
    <ControlsProvider>
    <MonsterProvider>
    <CombatElementsProvider>
      { children }
    </CombatElementsProvider>
    </MonsterProvider>
    </ControlsProvider>
    </CharacterProvider>
    </MenuProvider>
    </PlayerProvider>
    </WindowProvider>
  </>
}