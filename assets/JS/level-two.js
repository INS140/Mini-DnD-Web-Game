import game from "./game.js"
import { Armor, Elemental, Gnoll } from "./monster-types.js"


const levelTwo = {

    monsters: [],

    numberOfEnemies: 0,

    ///////////////////////
    //Level Functionality//
    ///////////////////////
    getMonsters: () => {
        let d100 = game.rollDice(1, 100)

        if (d100 > 60) {
            for (let i = 0; i < 4; i++) {
                levelTwo.monsters.push(new Gnoll)
            }
        } else if (d100 > 20) {
            for (let i = 0; i < 3; i++) {
                levelTwo.monsters.push(new Armor)
            }
        } else {
            for (let i = 0; i < 2; i++) {
                const elemental = new Elemental

                elemental.setImage()

                levelTwo.monsters.push(elemental)
            }
        }

        levelTwo.numberOfEnemies = levelTwo.monsters.length
    },

    /////////////////////////
    //Level Display Methods//
    /////////////////////////
    start: async () => {
        game.loadMonsterImages()

        game.controls.innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        const text = `You feel a presence ahead, and come across a group of ${levelTwo.monsters[0].name}s.`
        
        document.querySelector('#continue').onclick = game.loadCombatDisplayElements

        await game.textDisplay(text, document.querySelector('p'))
    },
}

export default levelTwo