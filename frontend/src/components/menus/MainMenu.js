import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import { WindowContext } from '../../contexts/WindowContext'

export default function MainMenu() {
  const { changeMenu } = useContext(MenuContext)
  const { changeWindow } = useContext(WindowContext)

  return <div className="menu">
    <h1>Dungeon Crawl</h1>
    <hr />
    <button onClick={() => changeWindow('combat')}>Play Now</button><br />
    <button onClick={() => changeMenu('newGame')}>New Game</button><br />
    <button>Load Game</button><br />
    <button>Options</button>
  </div>
}