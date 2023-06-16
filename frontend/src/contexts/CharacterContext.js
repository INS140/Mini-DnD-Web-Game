import { createContext, useState, useEffect } from "react"
import { Fighter, Wizard, Paladin } from "../class-options"

export const CharacterContext = createContext()

export default function CharacterProvider({ children }) {
  const [ character, setCharacter ] = useState({})
  const [ hp, setHp ] = useState(0)
  const [ sp, setSp ] = useState(0)

  useEffect(() => {
    setHp(character?.hp)
    setSp(character?.sp)
  }, [character])

  function selectCharacter({ name, classType }) {
    switch (classType) {
      case 'fighter':
        setCharacter(new Fighter(name))
        break;
      case 'wizard':
        setCharacter(new Wizard(name))
        break;
      case 'paladin':
        setCharacter(new Paladin(name))
        break;
    }
  }

  function resetCharacter() {
    setCharacter({})
  }

  function takeDamage(dmg) {
    character.hp -= dmg
    setHp(prev => prev -= dmg)
  }

  return <CharacterContext.Provider value={{ character, hp, sp, selectCharacter, resetCharacter, takeDamage }}>
    { children }
  </CharacterContext.Provider>
}