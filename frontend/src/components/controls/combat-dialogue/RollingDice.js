import { useContext, useEffect } from 'react'
import { ControlsContext } from '../../../contexts/ControlsContext'
import useTextDisplay from '../../../custom-hooks/useTextDisplay'
import { playerAttack } from '../../../GameFunctions'
import PlayerAttackPhase from './PlayerAttackPhase'
import { CharacterContext } from '../../../contexts/CharacterContext'
import { CombatElementsContext } from '../../../contexts/CombatElementsContext'

export default function RollingDice() {
  const { character } = useContext(CharacterContext)
  const { target } = useContext(CombatElementsContext)
  const { changeControls } = useContext(ControlsContext)

  const { text, finished } = useTextDisplay('Rolling dice . . .')

  useEffect(() => {
    if (finished) {
      const { dmg, inputText } = playerAttack(character, target)
      changeControls(<PlayerAttackPhase next="actions" dmg={dmg} inputText={inputText} />)
    }
  }, [finished])

  return <h2>{ text }</h2>
}