import { useContext, useState } from "react"
import { CombatElementsContext } from "../../../contexts/CombatElementsContext"
import useHealthColors from "../../../custom-hooks/useHealthColors"
import { ControlsContext } from "../../../contexts/ControlsContext"
import RollingDice from "../../controls/RollingDice"

export default function Monster({ monster }) {
  const [ hp, setHp ] = useState(monster.hp)

  const { changeControls } = useContext(ControlsContext)
  const { visible, targetSelect, toggleTargetSelect } = useContext(CombatElementsContext)

  const colors = useHealthColors(hp, monster.hpMax)

  function handleAttackTarget() {
    toggleTargetSelect()
    setHp(prev => prev-=10)
    changeControls('rollingPlayerAttack')
  }

  return <div
    style={{ display: hp <= 0 ? 'none' : '' }}
    onClick={() => targetSelect ? handleAttackTarget() : null}
  >
    <span
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        visibility: visible ? 'visible' : 'hidden'
      }}
    >
      {hp}/{monster.hpMax}
    </span>
    <img
      src={monster.url}
      alt={monster.name}
      style={{
        height: monster.imgHeight
      }}
    />
  </div>
}