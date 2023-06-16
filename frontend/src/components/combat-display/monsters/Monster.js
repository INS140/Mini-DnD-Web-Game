import { useContext } from "react"
import { CombatElementsContext } from "../../../contexts/CombatElementsContext"
import useHealthColors from "../../../custom-hooks/useHealthColors"
import { ControlsContext } from "../../../contexts/ControlsContext"

export default function Monster({ monster }) {
  const { changeControls } = useContext(ControlsContext)
  const { visible, setTarget, targetSelect, toggleTargetSelect } = useContext(CombatElementsContext)

  const colors = useHealthColors(monster.hp, monster.hpMax)

  function handleAttackTarget() {
    toggleTargetSelect()
    setTarget(monster)
    changeControls('rollingPlayerAttack')
  }

  return <div
    className="monster"
    style={{ display: monster.hp <= 0 ? 'none' : '' }}
    onClick={() => targetSelect ? handleAttackTarget() : null}
  >
    <span
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        visibility: visible ? 'visible' : 'hidden'
      }}
    >
      {monster.hp}/{monster.hpMax}
    </span>
    <img
      src={monster.url}
      alt={monster.name}
    />
  </div>
}