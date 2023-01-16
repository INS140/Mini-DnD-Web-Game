import loadMainMenu from "./loadMainMenu.js"
import setPlayer from "./setPlayer.js"
import playGame from "./playGame.js"

// renders Create Game menu
const loadNewGameMenu = () => {
    root.innerHTML = null
    const menu = document.createElement('div')
    menu.classList.add('menu', 'newGame')
    menu.innerHTML = `
        <h2>New Game</h2>
        <hr>
        <label for="name">Character Name</label><br>
        <input type="text" name="name" id="name" /><br>
        <label for="classSelect">Select Class</label><br>
        <select id="classSelect" name="classSelect">
            <option value="fighter">Fighter</option>
            <option value="wizard">Wizard</option>
            <option value="paladin">Paladin</option>
        </select><br>
        <hr>
        <button id="back">Back</button>
        <button id="start">Start Game</button>
    `
    root.append(menu)
    document.querySelector('#back').onclick = loadMainMenu
    let input = document.querySelector('#name'),
        select = document.querySelector('#classSelect')
    
    document.querySelector('#start').onclick = () => {
        let player = setPlayer(input.value, select.value)
        playGame(player)
    }
}

export default loadNewGameMenu