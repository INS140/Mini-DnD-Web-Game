import useTextDisplay from '../../custom-hooks/useTextDisplay'
import LevelOne from '../../levels/LevelOne'
import { useContext } from 'react'
import { MonsterContext } from '../../contexts/MonsterContext'
import { ControlsContext } from '../../contexts/ControlsContext'

export default function StartGame() {
  const { setMonsters } = useContext(MonsterContext)
  const { changeControls } = useContext(ControlsContext)

  const { text, stopTimer } = useTextDisplay(
    `You come across an old abandoned tomb that smells of adventure. 
    Of course you cannot resist the temptation of riches, so you brave the deep unknown . . .`
  )

  function handleClick() {
    stopTimer()
    setMonsters(LevelOne())
    changeControls('startLevelOne')
  }

  return <>
    <p>{ text }</p>
    <button className="continue" onClick={handleClick}>Continue</button>
  </>
}