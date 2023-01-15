import loadMainMenu from "./loadMainMenu.js"

// renders Create Game menu
const loadNewGameMenu = () => {
    root.innerHTML = null
    let menu = document.createElement('div')
    menu.classList.add('container')
    menu.innerHTML = `
        <button id="back">Back</button>
        <h2>New Game</h2>
        <hr>
        <label for="classSelect">Select Class</label><br>
        <select id="classSelect" name="classSelect">
            <option value="fighter">Fighter</option>
            <option value="wizard">Wizard</option>
            <option value="paladin">Paladin</option>
        </select><br>
        <button onclick=startGame()>Start Game</button>
    `
    root.append(menu)
    document.querySelector('#back').onclick = loadMainMenu
}

export default loadNewGameMenu