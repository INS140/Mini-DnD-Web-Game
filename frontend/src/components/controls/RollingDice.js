import { useContext, useEffect } from 'react'
import { ControlsContext } from '../../contexts/ControlsContext'
import useTextDisplay from '../../custom-hooks/useTextDisplay'

export default function RollingDice({ next }) {
  const { changeControls } = useContext(ControlsContext)

  const { text, finished } = useTextDisplay('Rolling dice . . .')

  useEffect(() => {
    if (finished) changeControls(next)
  }, [finished])

  return <h2>{ text }</h2>
}