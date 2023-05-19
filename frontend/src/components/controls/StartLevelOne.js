import { useContext } from "react"
import useTextDisplay from "../../custom-hooks/useTextDisplay"
import Continue from "../ui-kit/Continue"
import { MonsterContext } from "../../contexts/MonsterContext"

export default function StartLevelOne() {
  const { monsters } = useContext(MonsterContext)

  const { text, stopTimer } = useTextDisplay(
    `After a short venture into the tomb, you are attacked by a group of ${monsters[0].name}s! Prepare for battle!`
  )

  return <>
    <p>{ text }</p>
    <Continue stopTimer={stopTimer} next="controls" />
  </>
}