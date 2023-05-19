import { useContext } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'

export default function Controls() {
  const { changeControls } = useContext(ControlsContext)

  return <div className="grid-4">
    <button onClick={() => changeControls('actions')}>Actions</button>
    <button onClick={() => changeControls('inventory')}>Inventory</button>
    <button onClick={() => changeControls('midGameOptions')}>Options</button>
    <button onClick={() => changeControls('quit')}>Quit</button>
  </div>
}