import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import { DisplayContext } from '../../contexts/DisplayContext'

export default function MainMenu() {
  const { changeMenu } = useContext(MenuContext)
  const { changeDisplay } = useContext(DisplayContext)

  return <div className="menu">
    <h1>Dungeon Crawl</h1>
    <hr />
    <button onClick={() => changeDisplay('combat')}>Play Now</button><br />
    <button onClick={() => changeMenu('newGame')}>New Game</button><br />
    <button>Load Game</button><br />
    <button>Options</button>
  </div>
}