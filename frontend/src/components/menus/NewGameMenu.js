export default function NewGameMenu() {
  return <div className="menu new-game">
    <h2>New Game</h2>
    <hr />
    <label for="name">Character Name</label><br />
    <input type="text" name="name" id="name" /><br />
    <label for="class-select">Select Class</label><br />
    <select id="class-select" name="class-select">
        <option value="fighter">Fighter</option>
        <option value="wizard">Wizard</option>
        <option value="paladin">Paladin</option>
    </select><br />
    <hr />
    <button id="cancel">Cancel</button>
    <button id="start">Start Game</button>
  </div>
}