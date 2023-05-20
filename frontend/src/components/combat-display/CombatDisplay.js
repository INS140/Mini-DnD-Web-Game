import MonsterDisplay from './monsters/MonsterDisplay'
import CharacterStats from './CharacterStats'

export default function CombatDisplay() {
  return <div className="display">
    <CharacterStats />
    <MonsterDisplay />
  </div>
}