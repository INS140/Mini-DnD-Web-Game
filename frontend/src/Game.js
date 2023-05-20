import { useContext } from "react"
import { WindowContext } from "./contexts/WindowContext"

export default function Game() {
  const { window } = useContext(WindowContext)

  return <>
    { window }
  </>
}