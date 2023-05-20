import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import { WindowContext } from '../../contexts/WindowContext'
import { CharacterContext } from '../../contexts/CharacterContext'

export default function MainMenu() {
  const { changeMenu } = useContext(MenuContext)
  const { changeWindow } = useContext(WindowContext)
  const { selectCharacter } = useContext(CharacterContext)

  function handleQuickPlay() {
    selectCharacter({name: 'Butcher', classType: 'fighter'})
    changeWindow('combat')
  }

  return <div className="menu">
    <h1>Dungeon Crawl</h1>
    <hr />
    <button onClick={handleQuickPlay}>Play Now</button><br />
    <button onClick={() => changeMenu('newGame')}>New Game</button><br />
    <button>Load Game</button><br />
    <button>Options</button>
  </div>
}