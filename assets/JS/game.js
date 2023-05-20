import { Fighter, Wizard, Paladin, SpellCaster } from "../../frontend/src/class-options.js"
import levelOne from "./level-one.js"
import levelTwo from "./level-two.js"
import bossFight from "./boss-fight.js"

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
    // loadMainMenu: () => {
    //     root.innerHTML = null
    //     const menu = document.createElement('div')
    //     menu.classList.add('menu')
    //     menu.innerHTML = ``
    //     root.append(menu)

    //     document.querySelector('#play-now').onclick = () => {
    //         game.player = new Fighter('Butcher')
    //         game.startNewGame()
    //     }

    //     document.querySelector('#new-game').onclick = game.loadNewGameMenu
    //     // document.querySelector('#load-game').onclick = game.loadLoadGameMenu
    //     // document.querySelector('#options').onclick = game.loadGameOptions
    // },

    // loadNewGameMenu: () => {
    //     root.innerHTML = null
    //     const menu = document.createElement('div')
    //     menu.classList.add('menu', 'new-game')
    //     menu.innerHTML = `
            
    //     `
    //     root.append(menu)
    //     document.querySelector('#cancel').onclick = game.loadMainMenu

    //     let input = document.querySelector('#name'),
    //         select = document.querySelector('#class-select')
        
    //     document.querySelector('#start').onclick = () => {
    //         if (input.value !== '') {
    //             game.setPlayer(input.value, select.value)
    //             game.startNewGame()
    //         } else {
    //             menu.innerHTML = `
    //                 <p style="margin-top: 80px;"><b>Please enter a name for your character</b></p>
    //                 <button id="okay">Okay</button>
    //             `
    //             document.querySelector('#okay').onclick = game.loadNewGameMenu
    //         }
    //     }
    // },

    // loadCombatWindow: () => {
    //     root.innerHTML = null
    //     const combatWindow = document.createElement('div')
    //     combatWindow.classList.add('combat-window')
    //     combatWindow.innerHTML = `
    //         <div id="display"></div>
    //         <div id="controls"></div>
    //     `
    //     root.append(combatWindow)

    //     game.display = document.querySelector('#display')
    //     game.controls = document.querySelector('#controls')
    // },

    // loadMonsterImages: () => {
    //     game.currentLevel.getMonsters()
        
    //     let monsterImages = document.createElement('div')
        
    //     monsterImages.classList.add('monster-images')

    //     game.display.append(monsterImages)

    //     game.setMonsterImgMaxHeight()

    //     game.setMonsterImgWidth()

    //     game.currentLevel.monsters.forEach((monster, index) => {
    //         monster.img = document.createElement('div')

    //         monster.img.style.width = monster.imgWidth

    //         monster.img.innerHTML = `
    //             <span id="${monster.name}${index}-hp-bar">${monster.hp}/${monster.hpMax}</span>
    //             <img id="${monster.name}${index}" src="${monster.url}" alt="${monster.name}"/>
    //         `

    //         monsterImages.append(monster.img)
    //     })
    // },

    // loadControls: () => {
    //     game.controls.innerHTML = `
            
    //     `

    //     document.querySelector('#actions').onclick = game.loadActions
    //     document.querySelector('#inventory').onclick = game.loadInventory
    //     // document.querySelector('#options').onclick = game.loadCombatOptions
    //     document.querySelector('#quit').onclick = game.quitGame
    // },

    // loadPlayerStats: () => {
    //     game.playerStatsBlock = document.createElement('div')
    //     game.playerStatsBlock.id = 'player-stats'

    //     document.querySelector('.combat-window').append(game.playerStatsBlock)

    //     game.setPlayerStats()
    // },

    loadActions: () => {
        game.controls.innerHTML = `
            <div class="grid-4">
                <button id="attack">Attack</button>
                <button id="defend">Defend</button>
                <button id="item">Item</button>
                <button id="cancel">Cancel</button>
            </div>
        `
        document.querySelector('#attack').onclick = (game.player instanceof Fighter) ? game.attack : game.player.loadAttackOptions
        
        document.querySelector('#defend').onclick = game.defend
        document.querySelector('#item').onclick = game.useItem
        document.querySelector('#cancel').onclick = game.loadControls
    },

    loadInventory: async () => {
        game.controls.innerHTML = `
            <h2></h2>
            <button id="cancel">Cancel</button>
        `

        const inventoryBox = document.createElement('div')
        inventoryBox.classList.add('display-box', 'grid-4', 'fixed-center')

        game.player.inventory.forEach(item => {
            const itemCard = document.createElement('div')
            itemCard.innerHTML = `
                <img src="${item.url}" alt="${item.name}" title="${item.name}"/>
                <p>${item.name}</p>
            `

            inventoryBox.append(itemCard)
        })

        document.querySelector('.combat-window').append(inventoryBox)
        
        document.querySelector('#cancel').onclick = () => {
            game.loadControls()
            inventoryBox.remove()
        }

        await game.textDisplay(`${game.player.name}'s Inventory`, document.querySelector('h2'))
    },

    // loadCombatDisplayElements: () => {
    //     game.loadControls()

    //     game.currentLevel.monsters.forEach((monster, index) => {
    //         const hpBar = document.querySelector(`#${monster.name}${index}-hp-bar`)
    //         hpBar.style.visibility = 'visible'
    //     })

    //     document.querySelector('#player-stats').style.visibility = 'visible'
    // },

    intermissionOne: async () => {
        document.querySelector('#player-stats').style.visibility = 'hidden'

        game.controls.innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        const text = `After defeating the ${levelOne.monsters[0].name}s, you continue your journey deeper into the tomb.`

        document.querySelector('#continue').onclick = game.currentLevel.start

        await game.textDisplay(text, document.querySelector('p'))
    },

    intermissionTwo: async () => {
        document.querySelector('#player-stats').style.visibility = 'hidden'

        game.controls.innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        const text = `You have defeated the ${levelTwo.monsters[0].name}s and can sense that the end is drawing near.`

        document.querySelector('#continue').onclick = game.currentLevel.start

        await game.textDisplay(text, document.querySelector('p'))
    },

    //////////////////////
    //Game Functionality//
    //////////////////////
    // startNewGame: async () => {
    //     game.loadCombatWindow()

    //     game.setLevel()

    //     let text = `You come across an old abandoned tomb that smells of adventure. 
    //     Of course you can not resist the temptation of riches, so you brave the deep unknown . . .`

    //     document.querySelector('#controls').innerHTML = `
    //         <p></p>
    //         <button id="continue">Continue</button>
    //     `

    //     document.querySelector('#continue').onclick = game.currentLevel.start

    //     await game.textDisplay(text, document.querySelector('p'))
    // },

    setLevel: () => {
        switch (game.currentLevel) {
            case levelOne:
                game.currentLevel = levelTwo
                game.intermissionOne()
                break
            case levelTwo:
                game.currentLevel = bossFight
                game.intermissionTwo()
                break
            default:
                game.currentLevel = levelOne
                break
        }
    },

    gameOver: async () => {
        root.innerHTML = `
            <div class="game-over">
                <h3></h3>
                <button id="continue">Continue?</button>
            </div>
        `

        await game.textDisplay(`GAME OVER`, document.querySelector('h3'), 100)

        document.querySelector('#continue').style.visibility = 'visible'

        document.querySelector('#continue').onclick = () => {
            game.loadMainMenu()
            game.resetGame()
        }
    },

    // quitGame: async () => {
    //     game.controls.innerHTML = `
            
    //     `

    //     document.querySelector('#quit').onclick = () => {
    //         game.loadMainMenu()
    //         game.resetGame()
    //     }

    //     document.querySelector('#cancel').onclick = game.loadControls

    //     await game.textDisplay('Are you sure you want to quit?', document.querySelector('h2'))
    // },

    resetGame: () => {
        levelOne.monsters = []
        levelTwo.monsters = []
        bossFight.monsters = []

        game.currentLevel = null
        game.controls = null
        game.display = null 
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
            // game.playerStatsBlock.innerHTML = `
            //     <h3 id="player-hp">HP:</h3><span id="hp-bar">${game.player.hp}/${game.player.hpMax}</span>
            // `
            
            // document.querySelector('#player-stats').style.grid = '1fr / 1fr 9fr'

            // game.setHpBar(game.player, document.querySelector('#hp-bar'))
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
        game.currentLevel.monsters.forEach(monster => {
            monster.setImgWidth()
        })
    },

    setMonsterImgMaxHeight: () => {
        const monsterImages = document.querySelector('.monster-images')

        if (monsterImages !== null) {
            if (window.innerWidth < 450) {
                monsterImages.style.height = (game.player instanceof Fighter) 
                                            ? `${window.innerHeight*3/5 - 75}px`
                                            : `${window.innerHeight*3/5 - 116}px`
            } else {
                monsterImages.style.height = (game.player instanceof Fighter) 
                                            ? `${window.innerHeight*3/4 - 75}px`
                                            : `${window.innerHeight*3/4 - 116}px`
            }
        }
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

    // setHpBar: (object, element) => {
    //     const hpBar = element

    //     const {hp, hpMax} = object

    //     hpBar.style.width = Math.floor(hp/hpMax*100) + '%'

    //     if (hp > hpMax*60/100) {
    //         hpBar.style.backgroundColor = 'green'
    //     } else if (hp > hpMax*20/100) {
    //         hpBar.style.backgroundColor = 'yellow'
    //         hpBar.style.color = 'black'
    //     } else {
    //         hpBar.style.backgroundColor = 'red'
    //         hpBar.style.color = 'white'
    //     }
    // },

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

    // rollDice: (numOfRolls, sides) => {
    //     let total = 0
    //     for (let i = 0; i < numOfRolls; i++) {
    //         total += Math.floor(Math.random()*sides) + 1
    //     }
    //     return total
    // },

    // textDisplay: async (text, element, time=30) => {
    //     element.innerHTML = null

    //     for (const char of text.split('')) {
    //         await new Promise(res => setTimeout(res, time)).then(() => element.innerHTML += char)
    //     }

    //     await new Promise(res => setTimeout(res, 250))
    // },

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

            if (game.player instanceof SpellCaster) game.player.casting = false

            game.currentLevel.monsters.forEach(monster => monster.img.onclick = null)
        }

        game.currentLevel.monsters.forEach(monster => {
            monster.img.onclick = async () => {
                game.currentLevel.monsters.forEach(monster => monster.img.onclick = null)

                const atkMod = (game.player.casting) ? game.player.spellMod : game.player.atkMod

                const atkRoll = game.rollDice(1, 20)

                game.controls.innerHTML = `<h2></h2>`
                let h2 = document.querySelector('h2')

                await game.textDisplay(`Rolling dice . . .`, h2)

                if (atkRoll + atkMod >= monster.ac || atkRoll === 20) {
                    const dmg = (atkRoll === 20) ? game.player.getCritDmg() 
                                : (atkRoll === 20 && game.player.casting) ? game.player.spellChoise.getCritDmg()
                                : (game.player.casting) ? game.player.spellChoise.getDmg()
                                : game.player.getDmg()

                    await game.textDisplay(`You hit ${monster.name} for ${dmg}!`, h2)

                    monster.hp = Math.max(monster.hp - dmg, 0)

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

                if (game.player instanceof SpellCaster && game.player.casting) {
                    game.player.sp -= game.player.spellChoise.spCost

                    game.setPlayerStats()

                    game.player.casting = false

                    game.player.spellChoise = null
                }

                if (game.currentLevel.numberOfEnemies === 0) {
                    if (game.currentLevel !== bossFight) {
                        await game.textDisplay(`You defeated the last ${monster.name}!`, h2)
                        game.setLevel()
                    } else {
                        game.win()
                    }
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
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#cancel').onclick = () => {
            game.loadActions()
            document.querySelector('.display-box').remove()
        }

        document.querySelectorAll('.display-box div').forEach((itemBox, index) => {
            itemBox.onclick = async () => {
                game.controls.innerHTML = `<h2></h2>`

                document.querySelector('.display-box').remove()

                const item = game.player.inventory[index]

                await game.textDisplay(`${game.player.name} uses a ${item.name}!`, document.querySelector('h2'))

                await item.use()

                game.player.inventory.splice(index, 1)

                game.monsterAttackPhase()
            }
        })

        await game.textDisplay('Choose an item to use', document.querySelector('h2'))
    },

    monsterAttackPhase: async () => {
        game.controls.innerHTML = `<h2></h2>`
        const h2 = document.querySelector('h2')

        const text = `The ${game.currentLevel.monsters[0].name}${game.currentLevel.numberOfEnemies > 1 ? 's are': ' is'} attacking . . .`

        await game.textDisplay(text, h2)

        let gameOver = false

        for (const monster of game.currentLevel.monsters) {
            if (!monster.dead) {
                const atkRoll = game.rollDice(1, 20)

                await game.textDisplay('Rolling Dice . . .', h2)

                if (atkRoll + monster.atkMod >= game.player.ac) {
                    let dmg = (atkRoll === 20) ? monster.getCritDmg() : monster.getDmg()

                    await game.textDisplay(`${monster.name} hit you for ${dmg}!`, h2)

                    game.player.hp -= dmg

                    if (game.player.hp <= 0) {
                        gameOver = true
                        game.gameOver()
                        break
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

    ////////////////////
    //The Win Function//
    ////////////////////
    win: async () => {
        game.controls.innerHTML = `<h2></h2>`

        const text = `${game.player.name} has defeated the ${bossFight.monsters[0].name}!     `

        await game.textDisplay(text, document.querySelector('h2'), 50)
        
        root.innerHTML = `
            <div id="win-screen">
                <h2 class=".win-text"></h2>
            </div>
        `

        await game.textDisplay(`Congratulations`, document.querySelector('h2'), 100)

        const div = document.createElement('div')
        div.innerHTML = `
            <h2 id="you-win"></h2>
            <button id="play-again">Play Again</button>
        `

        document.querySelector('#win-screen').append(div)

        await game.textDisplay(`You Win`, document.querySelector('#you-win'), 100)
                  .then(() => document.querySelector('#play-again').style.visibility = 'visible')
        
        document.querySelector('#play-again').onclick = () => {
            game.loadMainMenu()
            game.resetGame()
        }
    }
}

export default game