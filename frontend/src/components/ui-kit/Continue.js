import { useContext } from "react"
import { ControlsContext } from "../../contexts/ControlsContext"

export default function Continue(props) {
  const { changeControls } = useContext(ControlsContext)

  const { stopTimer, next, onClick } = props

  function handleClick() {
    stopTimer()
    changeControls(next)
  }

  return <button className="continue" onClick={onClick ? onClick : handleClick}>Continue</button>
}