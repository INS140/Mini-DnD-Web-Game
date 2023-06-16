import { useContext } from "react"
import { ControlsContext } from "../../contexts/ControlsContext"
import useTextDisplay from "../../custom-hooks/useTextDisplay"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"


export default function SelectTarget() {
  const { changeControls } = useContext(ControlsContext)
  const { toggleTargetSelect } = useContext(CombatElementsContext)

  const { text, stopTimer } = useTextDisplay('Select a target')

  function handleCancel() {
    stopTimer()
    toggleTargetSelect()
    changeControls('actions')
  }

  return <>
    <h2>{ text }</h2>
    <button onClick={handleCancel}>Cancel</button>
  </>
}