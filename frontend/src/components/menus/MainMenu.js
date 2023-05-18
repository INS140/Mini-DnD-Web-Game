import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import { DisplayContext } from '../../contexts/DisplayContext'

export default function MainMenu() {
  const { ChangeMenu } = useContext(MenuContext)
  const { ChangeDisplay } = useContext(DisplayContext)

  return <div className="menu">
    <h1>Dungeon Crawl</h1>
    <hr />
    <button onClick={() => ChangeDisplay('combat')}>Play Now</button><br />
    <button onClick={() => ChangeMenu('newGame')}>New Game</button><br />
    <button>Load Game</button><br />
    <button>Options</button>
  </div>
}