import { useState, useContext } from "react"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"
import useHealthColors from "../../custom-hooks/useHealthColors"

let max = 100

export default function PlayerStats() {
  const [ hp, setHp ] = useState(100)

  const colors = useHealthColors(hp, max)

  const { visible } = useContext(CombatElementsContext)

  return <div
    className="player-stats"
    style={{ visibility: visible ? 'visible' : 'hidden' }}
  >
    <h3>HP:</h3>
    <span
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        width: Math.floor(hp/max*100) + '%'
      }}
    >
      {hp}/{max}
    </span>
    <button onClick={() => setHp(p => p-=10)}> - </button>
  </div>
}