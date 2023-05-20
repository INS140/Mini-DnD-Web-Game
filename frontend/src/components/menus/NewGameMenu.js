import { useContext, useState } from "react"
import { MenuContext } from "../../contexts/MenuContext"
import { WindowContext } from "../../contexts/WindowContext"
import { CharacterContext } from "../../contexts/CharacterContext"

export default function NewGameMenu() {
  const { changeMenu } = useContext(MenuContext)
  const { changeWindow } = useContext(WindowContext)
  const { selectCharacter } = useContext(CharacterContext)

  const [ inputs, setInputs ] = useState({
    name: '',
    classType: 'fighter'
  })

  const [ errorMessage, setErrorMessage ] = useState('')

  function handleChange(e) {
    const { value, name } = e.target

    if (value === '' || value === null || value === undefined) {
      setErrorMessage('Name cannot be empty')
    }

    setInputs(prev => ({ ...prev, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    selectCharacter(inputs)
    changeWindow('combat')
    changeMenu('main')
  }

  return <div className="menu new-game">
    <h2>New Game</h2>
    <hr />
    <form id="charForm" onSubmit={handleSubmit}>
      <label>
        Character Name <br />
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder={errorMessage}
          required /><br />
      </label>
      <label>
        Select Class <br />
        <select
          name="classType"
          value={inputs.classType}
          onChange={handleChange}
        >
          <option value="fighter">Fighter</option>
          <option value="wizard">Wizard</option>
          <option value="paladin">Paladin</option>
        </select><br />
      </label>
    </form>
    <hr />
    <button onClick={() => changeMenu('main')}>Cancel</button>
    <button type="submit" form="charForm">Start Game</button>
  </div>
}