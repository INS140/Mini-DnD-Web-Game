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

    playerStatsBlock: null,

    ///////////////////
    //Display Methods//
    ///////////////////
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

    loadPlayerStats: () => {
        game.playerStatsBlock = document.createElement('div')
        game.playerStatsBlock.id = 'player-stats'

        document.querySelector('.combatWindow').append(game.playerStatsBlock)

        game.setPlayerStats()
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
        document.querySelector('#attack').onclick = game.attack

        document.querySelector('#cancel').onclick = () => {
            game.loadControls()
        }
    },

    //////////////////////
    //Game Functionality//
    //////////////////////
    startNewGame: async () => {
        game.loadCombatWindow()

        game.currentLevel = levelOne

        let text = `You come across an old abandoned tomb that smells of adventure. 
        Of course you can not resist the temptation of riches, so you brave the deep unknown . . .`

        document.querySelector('#controls').innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        document.querySelector('#continue').onclick = levelOne.start

        await game.textDisplay(text, document.querySelector('p'))
    },

    gameOver: () => {
        root.innerHTML = `
                    <div class="game-over">
                        <h3>GAME OVER</h3>
                        <button id="continue">Continue?</button>
                    </div>`

        game.currentLevel.monsters = []

        document.querySelector('#continue').onclick = game.loadMainMenu
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

    setPlayerStats: () => {
        if (game.player instanceof Fighter) {
            game.playerStatsBlock.innerHTML = `
                <h3 id="player-hp">HP:</h3><span id="hp-bar">${game.player.hp}/${game.player.hpMax}</span>
            `
        } else {
            game.playerStatsBlock.innerHTML = `
                <h3 id="player-hp">HP:</h3>
                <span id="hp-bar">${game.player.hp}/${game.player.hpMax}</span>
                <h3 id="player-sp">SP:</h3>
                <span id="sp-bar">${game.player.sp}/${game.player.spMax}</span>
            `
        }
    },

    rollDice: (numOfRolls, sides) => {
        let total = 0
        for (let i = 0; i < numOfRolls; i++) {
            total += Math.floor(Math.random()*sides) + 1
        }
        return total
    },

    textDisplay: async (text, element) => {
        element.innerHTML = null

        for (const char of text.split('')) {
            await new Promise(res => setTimeout(res, 40)).then(() => element.innerHTML += char)
        }

        await new Promise(res => setTimeout(res, 250))
    },

    //////////////////
    //Combat Methods//
    //////////////////
    attack: () => {
        game.controls.innerHTML = `
            <h2>Select a target</h2>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#cancel').onclick = game.loadActions

        game.currentLevel.monsters.forEach(monster => {
            monster.img.onclick = async () => {
                game.currentLevel.monsters.forEach(monster => {
                    monster.img.onclick = null
                })

                let atkRoll = game.rollDice(1, 20)
                console.log(atkRoll)

                game.controls.innerHTML = `<h2></h2>`
                let h2 = document.querySelector('h2')

                await game.textDisplay(`Rolling dice . . .`, h2)

                if (atkRoll >= monster.ac) {
                    await game.textDisplay(`You hit ${monster.name} for ${game.player.atkDmg}!`, h2)

                    monster.hp -= game.player.atkDmg
                    console.log(monster.hp)

                    if (monster.hp <= 0) {
                        await game.textDisplay(`${monster.name} died!`, h2)
                        monster.img.remove()
                        game.currentLevel.numberOfEnemies--
                    }
                } else {
                    await game.textDisplay(`You missed . . .`, h2)
                }

                if (game.currentLevel.numberOfEnemies === 0) {
                    await game.textDisplay('You Win!!!', h2)
                } else {
                    await new Promise(res => setTimeout(res, 500)).then(() => {
                        game.monsterAttackPhase()
                    })
                }
            }
        })
    },

    monsterAttackPhase: async () => {
        game.controls.innerHTML = `<h2></h2>`
        let h2 = document.querySelector('h2')

        let text = `The ${game.currentLevel.monsters[0].name}${game.currentLevel.numberOfEnemies > 1 ? 's are': ' is'} attacking . . .`

        await game.textDisplay(text, h2)

        let gameOver = false

        for (const monster of game.currentLevel.monsters) {
            if (monster.hp > 0) {
                let atkRoll = game.rollDice(1, 20)
                console.log(atkRoll)

                await game.textDisplay('Rolling Dice . . .', h2)

                if (atkRoll >= game.player.ac) {
                    await game.textDisplay(`${monster.name} hit you for ${monster.atkDmg}!`, h2)

                    game.player.hp -= monster.atkDmg

                    game.setPlayerStats()

                    if (game.player.hp <= 0) {
                        game.gameOver()
                        gameOver = true
                    }
                } else {
                    await game.textDisplay(`${monster.name} missed . . .`, h2)
                }
            }
        }

        if (!gameOver) game.loadControls()
    },
}

export default game