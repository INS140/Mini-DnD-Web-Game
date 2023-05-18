import { useContext } from 'react'
import { DisplayContext } from '../../contexts/DisplayContext'

export default function MainMenu() {
  const { ChangeDisplay } = useContext(DisplayContext)

  return <div className="menu">
    <h1>Dungeon Crawl</h1>
    <hr />
    <button>Play Now</button><br />
    <button onClick={() => ChangeDisplay('newGame')}>New Game</button><br />
    <button>Load Game</button><br />
    <button>Options</button>
  </div>
}