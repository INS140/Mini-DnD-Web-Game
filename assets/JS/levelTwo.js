import game from "./game.js"
import levelOne from "./levelOne.js"
import { Armor, Elemental, Gnoll } from "./monsterTypes.js"


const levelTwo = {

    monsters: [],

    numberOfEnemies: 0,

    ///////////////////////
    //Level Functionality//
    ///////////////////////
    getMonsters: () => {
        let d99 = game.rollDice(1, 99)

        if (d99 > 66) {
            for (let i = 0; i < 3; i++) {
                const elemental = new Elemental

                elemental.setImage()

                levelTwo.monsters.push(elemental)
            }
        } else if (d99 > 33) {
            for (let i = 0; i < 2; i++) {
                levelTwo.monsters.push(new Armor)
            }
        } else {
            for (let i = 0; i < 3; i++) {
                levelTwo.monsters.push(new Gnoll)
            }
        }
        levelTwo.numberOfEnemies = levelTwo.monsters.length
    },

    /////////////////////////
    //Level Display Methods//
    /////////////////////////
    start: async () => {
        game.controls.innerHTML = null

        game.loadMonsterImages()

        game.controls.innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        let text = `After a short venture into the tomb, you are attacked by a group of ${levelTwo.monsters[0].name}s! Prepare for battle!`
        
        document.querySelector('#continue').onclick = () => {
            game.loadPlayerStats()
            game.loadControls()

            game.currentLevel.monsters.forEach((monster, index) => {
                const hpBar = document.querySelector(`#${monster.name}${index}-hp-bar`)
                hpBar.style.visibility = 'visible'
            })
        }

        await game.textDisplay(text, document.querySelector('p'))
    },

    reset: () => {
        levelOne.monsters = []
        levelTwo.monsters = []
        game.controls = null
        game.display = null 
    }
}

export default levelTwo