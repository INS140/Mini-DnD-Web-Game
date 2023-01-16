import loadNewGameMenu from "./loadNewGameMenu.js"

// renders Main Menu
const loadMainMenu = () => { 
    root.innerHTML = null
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
        <h1>Dungeon Crawl</h1>
        <hr>
        <button id="playNow">Play Now</button><br>
        <button id="newGame">New Game</button><br>
        <button id="loadGame">Load Game</button><br>
        <button id="options">Options</button>
    `
    root.append(menu)
    document.querySelector('#newGame').onclick = loadNewGameMenu
}

export default loadMainMenu