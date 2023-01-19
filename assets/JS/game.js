import { Fighter, Wizard, Paladin } from "./classOptions.js"
import levelOne from "./levelOne.js"

// root element
const root = document.querySelector('#root')

// game object
const game = {
    player: null,

    monsters: null,

    loadMainMenu() {
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
        document.querySelector('#newGame').onclick = this.loadNewGameMenu
    },

    loadNewGameMenu() {
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
        document.querySelector('#back').onclick = this.loadMainMenu

        let input = document.querySelector('#name'),
            select = document.querySelector('#classSelect')
        
        document.querySelector('#start').onclick = () => {
            game.setPlayer(input.value, select.value)
            game.startNewGame()
        }
    },

    loadCombatWindow() {
        root.innerHTML = null
        const combatWindow = document.createElement('div')
        combatWindow.classList.add('combatWindow')
        combatWindow.innerHTML = `
            <div id="display"></div>
            <div id="controls"></div>
        `
        root.append(combatWindow)
    },

    loadControls() {
        controls.innerHTML = `
            <button id="actions">Actions</button>
            <button id="inventory">Inventory</button>
            <button id="options">Options</button>
            <button id="quit">Quit</button>
        `
    },

    startNewGame() {
        this.loadCombatWindow()

        const controls = document.querySelector('#controls')

        controls.innerHTML = `
            <p>You come across an old abandoned tomb that smells of adventure. 
            Of course you can not resist the temptation of riches, so you brave the deep unknown ...</p>
            <button id="continue">Continue</button>
        `

        document.querySelector('#continue').onclick = levelOne
    },

    setPlayer(name, classType) {
        switch (classType) {
            case 'fighter':
                this.player = new Fighter(name)
                break;
            case 'wizard':
                this.player = new Wizard(name)
                break;
            case 'paladin':
                this.player = new Paladin(name)
                break;
        }
    }
}

export default game