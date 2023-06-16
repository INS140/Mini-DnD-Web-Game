import { useContext } from "react"
import { MonsterContext } from "../../../contexts/MonsterContext"
import Monster from "./Monster"

export default function MonsterDisplay() {
  const { monsters } = useContext(MonsterContext)

  return monsters.length !== 0
    ? <div className="monster-images">
      { monsters.map((monster, i) => {
        monster.id = `${monster.name}${i}`
        return <Monster monster={monster} key={`${monster.name}-${i}`} />
      }) }
    </div>
    :<></>
}