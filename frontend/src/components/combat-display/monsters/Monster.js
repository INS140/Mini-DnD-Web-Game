import { useContext, useState } from "react"
import { CombatElementsContext } from "../../../contexts/CombatElementsContext"
import useHealthColors from "../../../custom-hooks/useHealthColors"

export default function Monster({ monster }) {
  const [ hp, setHp ] = useState(monster.hp)

  const { visible } = useContext(CombatElementsContext)

  const colors = useHealthColors(hp, monster.hpMax)

  return <div>
    <span
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        visibility: visible ? 'visible' : 'hidden'
      }}
    >
      {hp}/{monster.hpMax}
    </span>
    <img src={monster.url} alt={monster.name} onClick={() => setHp(prev => prev-=10)} />
  </div>
}