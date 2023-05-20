import MonsterDisplay from './monsters/MonsterDisplay'
import PlayerStats from './PlayerStats'

export default function CombatDisplay() {
  return <div className="display">
    <PlayerStats />
    <MonsterDisplay />
  </div>
}