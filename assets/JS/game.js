import { Fighter, Wizard, Paladin } from "./classOptions.js"
import levelOne from "./levelOne.js"

// root element
const root = document.querySelector('#root')

// game object
const game = {
    player: null,

    currentLevel: null,

    display: null,

    controls: null,

    /////////////////////
    //Display Functions//
    /////////////////////
    loadMainMenu: () => {
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

        document.querySelector('#playNow').onclick = () => {
            game.player = new Fighter('Butcher')
            game.startNewGame()
        }

        document.querySelector('#newGame').onclick = game.loadNewGameMenu
    },

    loadNewGameMenu: () => {
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
        document.querySelector('#back').onclick = game.loadMainMenu

        let input = document.querySelector('#name'),
            select = document.querySelector('#classSelect')
        
        document.querySelector('#start').onclick = () => {
            if (input.value !== '') {
                game.setPlayer(input.value, select.value)
                game.startNewGame()
            } else {
                menu.innerHTML = `
                    <p style="margin-top: 80px;"><b>Please enter a name for your character</b></p>
                    <button id="okay">Okay</button>
                `
                document.querySelector('#okay').onclick = game.loadNewGameMenu
            }
        }
    },

    loadCombatWindow: () => {
        root.innerHTML = null
        const combatWindow = document.createElement('div')
        combatWindow.classList.add('combatWindow')
        combatWindow.innerHTML = `
            <div id="display"></div>
            <div id="controls"></div>
        `
        root.append(combatWindow)

        game.display = document.querySelector('#display')
        game.controls = document.querySelector('#controls')
    },

    loadControls: () => {
        game.controls.innerHTML = `
            <div class="btn-4">
                <button id="actions">Actions</button>
                <button id="inventory">Inventory</button>
                <button id="options">Options</button>
                <button id="quit">Quit</button>
            </div>
        `

        document.querySelector('#actions').onclick = game.loadActions

        document.querySelector('#quit').onclick = () => {
            game.controls.innerHTML = `
                <h2>Are you sure you want to quit?</h2>
                <button id="quit">Quit</button>
                <button id="cancel">Cancel</button>
            `

            document.querySelector('#quit').onclick = () => {
                game.loadMainMenu()
                levelOne.reset()
            }

            document.querySelector('#cancel').onclick = () => {
                game.loadControls()
            }
        }
    },

    loadActions: () => {
        game.controls.innerHTML = `
            <div class="btn-4">
                <button id="attack">Attack</button>
                <button id="defend">Defend</button>
                <button id="heal">Heal</button>
                <button id="cancel">Cancel</button>
            </div>
        `
        document.querySelector('#attack').onclick = game.player.attack

        document.querySelector('#cancel').onclick = () => {
            game.loadControls()
        }
    },

    //////////////////////
    //Game Functionality//
    //////////////////////
    startNewGame: () => {
        game.loadCombatWindow()

        game.currentLevel = levelOne

        document.querySelector('#controls').innerHTML = `
            <p>You come across an old abandoned tomb that smells of adventure. 
            Of course you can not resist the temptation of riches, so you brave the deep unknown ...</p>
            <button id="continue">Continue</button>
        `

        document.querySelector('#continue').onclick = levelOne.start
    },

    setPlayer: (name, classType) => {
        switch (classType) {
            case 'fighter':
                game.player = new Fighter(name)
                break;
            case 'wizard':
                game.player = new Wizard(name)
                break;
            case 'paladin':
                game.player = new Paladin(name)
                break;
        }
    },

    rollDice: (numOfRolls, sides) => {
        let total = 0
        for (let i = 0; i < numOfRolls; i++) {
            total += Math.floor(Math.random()*sides) + 1
        }
        return total
    }
}

export default game