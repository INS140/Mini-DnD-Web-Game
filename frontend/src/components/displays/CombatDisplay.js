

export default function CombatDisplay() {
  let monsters, controls

  return <div className="combat-display">
    <div className="display">
      {/* <PlayerStats /> */}
      { monsters }
    </div>
    <div className="controls">
      { controls }
    </div>
  </div>
}