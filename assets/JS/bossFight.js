import game from "./game.js"
import { Lich, Dragon, Tarrasque } from "./monsterTypes.js"

const bossFight = {

    monsters: [],

    numberOfEnemies: 0,

    ///////////////////////
    //Level Functionality//
    ///////////////////////
    getMonsters: () => {
        let d201 = game.rollDice(1, 201)

        if (d201 > 100) {
            bossFight.monsters.push(new Lich)
        } else if (d201 > 1) {
            bossFight.monsters.push(new Dragon)
        } else {
            bossFight.monsters.push(new Tarrasque)
        }

        bossFight.numberOfEnemies = bossFight.monsters.length
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

        const text = `You have come to the end of the tomb and awaiting you is a ${bossFight.monsters[0].name}! It doesn't look very happy to see you .  .  .`
        
        document.querySelector('#continue').onclick = game.loadCombatDisplayElements

        await game.textDisplay(text, document.querySelector('p'))
    },
}

export default bossFight