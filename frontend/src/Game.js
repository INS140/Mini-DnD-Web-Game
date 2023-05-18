import { useContext } from "react"
import { DisplayContext } from "./contexts/DisplayContext"

export default function Game() {
  const { display } = useContext(DisplayContext)

  return <>
    { display }
  </>
}