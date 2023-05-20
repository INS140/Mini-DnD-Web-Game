import { useContext } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'
import CombatDisplay from '../combat-display/CombatDisplay'

export default function CombatWindow() {
  const { control } = useContext(ControlsContext)

  return <div className="combat-window">
    <CombatDisplay />
    <div className="controls">
      { control }
    </div>
  </div>
}