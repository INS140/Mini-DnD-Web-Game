import { useContext } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'
import MonsterDisplay from '../monsters/MonsterDisplay'

export default function CombatDisplay() {
  const { control } = useContext(ControlsContext)

  return <div className="combat-display">
    <div className="display">
      {/* <PlayerStats /> */}
      <MonsterDisplay />
    </div>
    <div className="controls">
      { control }
    </div>
  </div>
}