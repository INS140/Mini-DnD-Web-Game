import { useContext } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'

export default function CombatDisplay() {
  const { control } = useContext(ControlsContext)

  let monsters

  return <div className="combat-display">
    <div className="display">
      {/* <PlayerStats /> */}
      { monsters }
    </div>
    <div className="controls">
      { control }
    </div>
  </div>
}