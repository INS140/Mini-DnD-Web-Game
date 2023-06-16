import { useContext, useEffect } from "react"
import { CombatElementsContext } from "../../contexts/CombatElementsContext"
import { CharacterContext } from "../../contexts/CharacterContext"
import useHealthColors from "../../custom-hooks/useHealthColors"
import { Fighter, SpellCaster } from "../../class-options"
import useSpellColors from "../../custom-hooks/useSpellColors"

export default function CharacterStats() {
  const { character, hp, sp } = useContext(CharacterContext)
  const { visible } = useContext(CombatElementsContext)

  const colors = useHealthColors(hp, character.hpMax)
  const spellColor = useSpellColors(sp, character?.spMax)

  return <div
    className="character-stats"
    style={{
      visibility: visible ? 'visible' : 'hidden',
      grid: character instanceof Fighter ? '1fr / 1fr 9fr' : ''
    }}
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
    { character instanceof SpellCaster && <>
      <h3>SP:</h3>
      <span
        style={{
          backgroundColor: spellColor,
          width: Math.floor(sp/character.spMax*100) + '%'
        }}
      >
        {character.sp}/{character.spMax}
      </span>
    </>}
  </div>
}