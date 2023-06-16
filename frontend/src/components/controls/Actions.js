import { useContext } from "react"
import { ControlsContext } from "../../contexts/ControlsContext"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"

export default function Actions() {
  const { changeControls } = useContext(ControlsContext)
  const { toggleTargetSelect } = useContext(CombatElementsContext)

  function handleAttack() {
    toggleTargetSelect()
    changeControls('selectTarget')
  }

  return <div className="grid-4">
    <button onClick={handleAttack}>Attack</button>
    <button>Defend</button>
    <button>Item</button>
    <button onClick={() => changeControls('controls')}>Cancel</button>
  </div>
}