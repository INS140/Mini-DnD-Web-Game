import loadNewGameMenu from "./loadNewGameMenu.js"

// renders Main Menu
const loadMainMenu = () => { 
    root.innerHTML = null
    let menu = document.createElement('div')
    menu.classList.add('container')
    menu.innerHTML = `
        <h1>Dungeon Crawl</h1>
        <hr>
        <button id="playNow">Play Now</button>
        <button id="newGame">New Game</button>
        <button id="loadGame">Load Game</button>
        <button id="options">Options</button>
    `
    root.append(menu)
    document.querySelector('#newGame').onclick = loadNewGameMenu
}

export default loadMainMenu