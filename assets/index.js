const root = document.querySelector('#root')

// renders Main Menu
const loadMainMenu = () => { 
    root.innerHTML = null
    let menu = document.createElement('div')
    menu.classList.add('container')
    menu.innerHTML = `
        <h1>Dungeon Crawl</h1>
        <hr>
        <button id="playNow">Play Now</button>
        <button id="createGame" onclick=loadCreateGame()>Create Game</button>
        <button id="loadGame">Load Game</button>
        <button id="options">Options</button>
    `
    root.append(menu)
}

// renders Create Game menu
const loadCreateGame = () => {
    root.innerHTML = null
    let menu = document.createElement('div')
    menu.classList.add('container')
    menu.innerHTML = `
        <button onclick=loadMainMenu()>Back</button>
        <h2>Create Game</h2>
        <hr>
        <label for="classSelect">Select Class</label><br>
        <select id="classSelect" name="classSelect">
            <option value="fighter">Fighter</option>
            <option value="wizard">Wizard</option>
            <option value="paladin">Paladin</option>
        </select><br>
        <button>Start Game</button>
    `
    root.append(menu)
}

window.onload = () => {
    loadMainMenu()
}