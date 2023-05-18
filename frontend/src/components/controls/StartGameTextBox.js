import { useContext } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'
import { DisplayContext } from '../../contexts/DisplayContext'
import useTextDisplay from '../../custom-hooks/useTextDisplay'

export default function StartGameTextBox() {
  const { ChangeControls } = useContext(ControlsContext)
  const { ChangeDisplay } = useContext(DisplayContext)

  const { text, stopTimer } = useTextDisplay(
    `You come across an old abandoned tomb that smells of adventure. 
    Of course you cannot resist the temptation of riches, so you brave the deep unknown . . .`
  )

  function handleClick(e) {
    stopTimer()
    // ChangeControls('') temporary
    ChangeDisplay('menu')
  }

  return <>
    <p>{ text }</p>
    <button className="continue" onClick={handleClick}>Continue</button>
  </>
}