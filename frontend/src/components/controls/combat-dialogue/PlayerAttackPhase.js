import { useContext, useEffect, useRef } from 'react'
import { CharacterContext } from '../../../contexts/CharacterContext'
import { ControlsContext } from '../../../contexts/ControlsContext'
import useTextDisplay from '../../../custom-hooks/useTextDisplay'
import { CombatElementsContext } from '../../../contexts/CombatElementsContext'
import { rollDice } from '../../../GameFunctions'
import { MonsterContext } from '../../../contexts/MonsterContext'

export default function PlayerAttackPhase({ dmg, inputText }) {
  const { target } = useContext(CombatElementsContext)
  const { changeControls } = useContext(ControlsContext)
  const { handleAttackMonster } = useContext(MonsterContext)

  const { text, finished } = useTextDisplay(inputText, 30, 500)

  useEffect(() => {
    if (finished) {
      handleAttackMonster(target.id, dmg)
      changeControls('actions')
    }
  }, [finished])

  return <h2>{ text }</h2>
}