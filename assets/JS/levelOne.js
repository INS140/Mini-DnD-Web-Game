import game from "./game.js"
import { Kobold, Slime, Skeleton, Zombie } from "./monsterTypes.js"

const levelOne = {

    monsters: [],

    numberOfEnemies: 0,

    ///////////////////////
    //Level Functionality//
    ///////////////////////
    getMonsters: () => {
        let d100 = game.rollDice(1, 100)

        if (d100 > 75) {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Kobold)
            }
        } else if (d100 > 50) {
            for (let i = 0; i < 3; i++) {
                levelOne.monsters.push(new Slime)
            }
        } else if (d100 > 25) {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Skeleton)
            }
        } else {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Zombie)
            }
        }
        
        levelOne.numberOfEnemies = levelOne.monsters.length
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

        let text = `After a short venture into the tomb, you are attacked by a group of ${levelOne.monsters[0].name}s! Prepare for battle!`
        
        document.querySelector('#continue').onclick = () => {
            game.loadPlayerStats()
            game.loadCombatDisplayElements()
        }

        await game.textDisplay(text, document.querySelector('p'))
    },
}

export default levelOne