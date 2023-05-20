import { useContext } from "react"
import useTextDisplay from "../../custom-hooks/useTextDisplay"
import { ControlsContext } from "../../contexts/ControlsContext"
import { WindowContext } from '../../contexts/WindowContext'
import { MonsterContext } from "../../contexts/MonsterContext"


export default function QuitGame() {
  const { changeControls } = useContext(ControlsContext)
  const { changeWindow } = useContext(WindowContext)
  const { setMonsters } = useContext(MonsterContext)

  const { text, stopTimer } = useTextDisplay('Are you sure you want to quit?')

  function handleQuit() {
    stopTimer()
    changeWindow('menu')
    changeControls('startGame')
    setMonsters([])
  }

  function handleCancel() {
    stopTimer()
    changeControls('controls')
  }

  return <>
    <h2>{ text }</h2>
    <div className="grid-2">
      <button onClick={handleQuit}>Quit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  </>
}