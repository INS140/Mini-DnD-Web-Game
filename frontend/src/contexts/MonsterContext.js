import { createContext, useState } from "react"

export const MonsterContext = createContext()

export default function MonsterProvider({ children }) {
  const [ monsters, setMonsters ] = useState([])

  function handleAttackMonster(id, damage) {
    setMonsters(prev => prev.map(monster => monster.id === id ? {...monster, hp: monster.hp -= damage } : monster))
  }

  return <MonsterContext.Provider value={{ monsters, setMonsters, handleAttackMonster }}>
    { children }
  </MonsterContext.Provider>
}