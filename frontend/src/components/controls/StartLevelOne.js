import { useContext } from "react"
import useTextDisplay from "../../custom-hooks/useTextDisplay"
import { MonsterContext } from "../../contexts/MonsterContext"
import { ControlsContext } from "../../contexts/ControlsContext"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"

export default function StartLevelOne() {
  const { changeControls } = useContext(ControlsContext)
  const { monsters } = useContext(MonsterContext)
  const { toggleVisibility } = useContext(CombatElementsContext)

  const { text, stopTimer } = useTextDisplay(
    `After a short venture into the tomb, you are attacked by a group of ${monsters[0].name}s! Prepare for battle!`
  )

  function handleClick() {
    stopTimer()
    changeControls('controls')
    toggleVisibility()
  }

  return <>
    <p>{ text }</p>
    <button className="continue" onClick={handleClick}>Continue</button>
  </>
}