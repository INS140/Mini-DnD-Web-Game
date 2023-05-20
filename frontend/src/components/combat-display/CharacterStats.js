import { useContext } from "react"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"
import { CharacterContext } from "../../contexts/CharacterContext"
import useHealthColors from "../../custom-hooks/useHealthColors"

export default function CharacterStats() {
  const { character, hp, takeDamage } = useContext(CharacterContext)
  const { visible } = useContext(CombatElementsContext)

  const colors = useHealthColors(hp, character.hpMax)

  return <div
    className="character-stats"
    style={{ visibility: visible ? 'visible' : 'hidden' }}
  >
    <h3>HP:</h3>
    <span
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        width: Math.floor(hp/character.hpMax*100) + '%'
      }}
    >
      {hp}/{character.hpMax}
    </span>
    <button onClick={() => takeDamage(10)}> - </button>
  </div>
}