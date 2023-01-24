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
            <button id="play-now">Play Now</button><br>
            <button id="new-game">New Game</button><br>
            <button id="load-game">Load Game</button><br>
            <button id="options">Options</button>
        `
        root.append(menu)

        document.querySelector('#play-now').onclick = () => {
            game.player = new Fighter('Butcher')
            game.startNewGame()
        }

        document.querySelector('#new-game').onclick = game.loadNewGameMenu
    },

    loadNewGameMenu: () => {
        root.innerHTML = null
        const menu = document.createElement('div')
        menu.classList.add('menu', 'new-game')
        menu.innerHTML = `
            <h2>New Game</h2>
            <hr>
            <label for="name">Character Name</label><br>
            <input type="text" name="name" id="name" /><br>
            <label for="class-select">Select Class</label><br>
            <select id="class-select" name="class-select">
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
            select = document.querySelector('#class-select')
        
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
        combatWindow.classList.add('combat-window')
        combatWindow.innerHTML = `
            <div id="display"></div>
            <div id="controls"></div>
        `
        root.append(combatWindow)

        game.display = document.querySelector('#display')
        game.controls = document.querySelector('#controls')
    },

    loadMonsterImages: () => {
        game.currentLevel.getMonsters()
        game.setMonsterImgWidth()
        
        let monsterImages = document.createElement('div')
        
        monsterImages.classList.add('monster-images')

        game.currentLevel.monsters.forEach((monster, index) => {
            monster.img = document.createElement('div')
            monster.img.style.width = monster.imgWidth
            monster.img.innerHTML = `
                <span id="${monster.name}${index}-hp-bar">${monster.hp}/${monster.hpMax}</span>
                <img id="${monster.name}${index}" src="${monster.url}" alt="${monster.name}"/>
            `

            monsterImages.append(monster.img)
        })

        game.display.append(monsterImages)
    },

    loadControls: () => {
        game.controls.innerHTML = `
            <div class="grid-4">
                <button id="actions">Actions</button>
                <button id="inventory">Inventory</button>
                <button id="options">Options</button>
                <button id="quit">Quit</button>
            </div>
        `

        document.querySelector('#actions').onclick = game.loadActions
        document.querySelector('#inventory').onclick = game.loadInventory
        // document.querySelector('#options').onclick = game.loadCombatOptions
        document.querySelector('#quit').onclick = game.quitGame
    },

    loadPlayerStats: () => {
        game.playerStatsBlock = document.createElement('div')
        game.playerStatsBlock.id = 'player-stats'

        document.querySelector('.combat-window').append(game.playerStatsBlock)

        game.setPlayerStats()
    },

    loadActions: () => {
        game.controls.innerHTML = `
            <div class="grid-4">
                <button id="attack">Attack</button>
                <button id="defend">Defend</button>
                <button id="item">Item</button>
                <button id="cancel">Cancel</button>
            </div>
        `
        document.querySelector('#attack').onclick = game.attack
        document.querySelector('#defend').onclick = game.defend
        document.querySelector('#item').onclick = game.useItem
        document.querySelector('#cancel').onclick = game.loadControls
    },

    loadInventory: async () => {
        game.controls.innerHTML = `
            <h2></h2>
            <button id="back">Back</button>
        `

        const inventoryBox = document.createElement('div')
        inventoryBox.id = 'inventory-box'
        inventoryBox.classList.add('grid-4')

        game.player.inventory.forEach(item => {
            const div = document.createElement('div')
            div.innerHTML = `
                <img src="${item.url}" alt="${item.name}" title="${item.name}"/>
                <p>${item.name}</p>
            `

            inventoryBox.append(div)
        })

        document.querySelector('.combat-window').append(inventoryBox)
        
        document.querySelector('#back').onclick = () => {
            game.loadControls()
            inventoryBox.remove()
        }

        await game.textDisplay(`${game.player.name}'s Inventory`, document.querySelector('h2'))
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

    quitGame: () => {
        game.controls.innerHTML = `
            <h2>Are you sure you want to quit?</h2>
            <button id="quit">Quit</button>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#quit').onclick = () => {
            game.loadMainMenu()
            game.currentLevel.reset()
        }

        document.querySelector('#cancel').onclick = game.loadControls
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
            
            document.querySelector('#player-stats').style.grid = '1fr / 1fr 9fr'

            game.setHpBar(game.player, document.querySelector('#hp-bar'))
        } else {
            game.playerStatsBlock.innerHTML = `
                <h3 id="player-hp">HP:</h3>
                <span id="hp-bar">${game.player.hp}/${game.player.hpMax}</span>
                <h3 id="player-sp">SP:</h3>
                <span id="sp-bar">${game.player.sp}/${game.player.spMax}</span>
            `

            game.setHpBar(game.player, document.querySelector('#hp-bar'))
            game.setSpBar()
        }
    },

    setMonsterImgWidth: () => {
        game.currentLevel.monsters.forEach((monster, i, arr) => {
            monster.imgWidth = (window.innerWidth <= 400) ? Math.floor(100/arr.length) + '%' : monster.imgWidth
        })
    },

    setMonsterHp: () => {
        game.currentLevel.monsters.forEach((monster, index) => {
            if (!monster.dead) {
                const hpBar = document.querySelector(`#${monster.name}${index}-hp-bar`)
                hpBar.innerHTML = `${monster.hp}/${monster.hpMax}`
                game.setHpBar(monster, hpBar)
            }
        })
    },

    setHpBar: (object, element) => {
        const hpBar = element

        const {hp, hpMax} = object

        hpBar.style.width = Math.floor(hp/hpMax*100) + '%'

        if (hp > hpMax*60/100) {
            hpBar.style.backgroundColor = 'green'
        } else if (hp > hpMax*20/100) {
            hpBar.style.backgroundColor = 'yellow'
            hpBar.style.color = 'black'
        } else {
            hpBar.style.backgroundColor = 'red'
        }
    },

    setSpBar: () => {
        const spBar = document.querySelector('#sp-bar')

            const {sp, spMax} = game.player

            spBar.style.width = Math.floor(sp/spMax*100) + '%'

            if (sp > spMax*60/100) {
                spBar.style.backgroundColor = 'blue'
            } else if (sp > spMax*20/100) {
                spBar.style.backgroundColor = 'purple'
            } else {
                spBar.style.backgroundColor = 'red'
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
    attack: async () => {
        game.controls.innerHTML = `
            <h2></h2>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#cancel').onclick = () => {
            game.loadActions()

            game.currentLevel.monsters.forEach(monster => monster.img.onclick = null)
        }

        game.currentLevel.monsters.forEach(monster => {
            monster.img.onclick = async () => {
                game.currentLevel.monsters.forEach(monster => monster.img.onclick = null)

                let atkRoll = game.rollDice(1, 20)

                game.controls.innerHTML = `<h2></h2>`
                let h2 = document.querySelector('h2')

                await game.textDisplay(`Rolling dice . . .`, h2)

                if (atkRoll >= monster.ac) {
                    await game.textDisplay(`You hit ${monster.name} for ${game.player.atkDmg}!`, h2)

                    monster.hp -= game.player.atkDmg

                    monster.hp = (monster.hp < 0) ? 0 : monster.hp

                    game.setMonsterHp()

                    if (monster.hp <= 0) {
                        await game.textDisplay(`${monster.name} died!`, h2)

                        monster.dead = true

                        monster.img.remove()

                        game.currentLevel.numberOfEnemies--
                    }
                } else {
                    await game.textDisplay(`You missed . . .`, h2)
                }

                if (game.currentLevel.numberOfEnemies === 0) {
                    await game.textDisplay('You Win!!!', h2)
                } else {
                    await new Promise(res => setTimeout(res, 500)).then(game.monsterAttackPhase)
                }
            }
        })

        // This line needs to go last so experienced players may skip the text loading
        await game.textDisplay('Select a target', document.querySelector('h2'))
    },

    defend: async () => {
        game.controls.innerHTML = `<h2></h2>`
        let h2 = document.querySelector('h2')

        await game.textDisplay(`${game.player.name} prepares for an attack . . .`, h2)

        game.player.ac += game.player.defBoost
        game.player.defending = true

        game.monsterAttackPhase()
    },

    useItem: async () => {
        game.loadInventory()

        game.controls.innerHTML = `
            <h2></h2>
            <button id="back">Back</button>
        `

        document.querySelector('#back').onclick = () => {
            game.loadActions()
            document.querySelector('#inventory-box').remove()
        }

        document.querySelectorAll('#inventory-box div').forEach((itemBox, index) => {
            itemBox.onclick = async () => {
                game.controls.innerHTML = `<h2></h2>`

                document.querySelector('#inventory-box').remove()

                const item = game.player.inventory[index]

                await game.textDisplay(`${game.player.name} uses a ${item.name}!`, document.querySelector('h2'))

                await item.useEffect()

                game.player.inventory.splice(index, 1)

                game.monsterAttackPhase()
            }
        })

        await game.textDisplay('Choose an item to use', document.querySelector('h2'))
    },

    monsterAttackPhase: async () => {
        game.controls.innerHTML = `<h2></h2>`
        let h2 = document.querySelector('h2')

        let text = `The ${game.currentLevel.monsters[0].name}${game.currentLevel.numberOfEnemies > 1 ? 's are': ' is'} attacking . . .`

        await game.textDisplay(text, h2)

        let gameOver = false

        for (const monster of game.currentLevel.monsters) {
            if (!monster.dead) {
                let atkRoll = 20 //game.rollDice(1, 20)

                await game.textDisplay('Rolling Dice . . .', h2)

                if (atkRoll >= game.player.ac) {
                    let dmg = (atkRoll === 20) ? monster.getCritDmg() : monster.getDmg()

                    await game.textDisplay(`${monster.name} hit you for ${dmg}!`, h2)

                    game.player.hp -= dmg

                    if (game.player.hp <= 0) {
                        game.gameOver()
                        gameOver = true
                    }

                    if (!gameOver) game.setPlayerStats()
                } else {
                    await game.textDisplay(`${monster.name} missed . . .`, h2)
                }
            }
        }

        if (!gameOver) {
            if (game.player.defending) game.player.ac -= game.player.defBoost

            game.player.defending = false

            game.loadControls()
        }
    },
}

export default game