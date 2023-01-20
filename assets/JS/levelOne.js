import game from "./game.js"
import { Kobold, Slime, Skeleton, Zombie } from "./monsterTypes.js"

const levelOne = {

    monsters: [],


    //Level Functionality
    getMonsters: () => {
        let d100 = Math.floor(Math.random()*101)

        if (d100 > 75) {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Kobold())
            }
        } else if (d100 > 50) {
            for (let i = 0; i < 3; i++) {
                levelOne.monsters.push(new Slime())
            }
        } else if (d100 > 25) {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Skeleton())
            }
        } else {
            for (let i = 0; i < 4; i++) {
                levelOne.monsters.push(new Zombie())
            }
        }
    },

    monsterAttackPhase: async () => {
        game.controls.innerHTML = `<h2></h2>`

        let text = `The ${levelOne.monsters[0].name}${levelOne.monsters.length > 1 ? 's': ''} are attacking ...`

        await game.textDisplay(text, document.querySelector('h2'))
    },

    /////////////////////////
    //Level Display Methods//
    /////////////////////////
    start: async () => {
        game.controls.innerHTML = null

        levelOne.getMonsters()
        
        let monsterImages = document.createElement('div'),
            idNum = 0
        
        monsterImages.classList.add('monsterImages')

        levelOne.monsters.forEach(monster => {
            monster.img = document.createElement('img')
            monster.img.src = monster.url
            monster.img.width = monster.imgWidth
            monster.img.id = `${monster.name}${idNum}`
            monster.img.alt = monster.name
            idNum++
            monsterImages.append(monster.img)
        })

        game.display.append(monsterImages)
        game.controls.innerHTML = `
            <p></p>
            <button id="continue">Continue</button>
        `

        let text = `After a short venture into the tomb, you are attacked by a group of ${levelOne.monsters[0].name}s! Prepare for battle!`
        
        document.querySelector('#continue').onclick = game.loadControls

        await game.textDisplay(text, document.querySelector('p'))
    },

    reset: () => {
        levelOne.monsters = []
        game.controls = null
        game.display = null 
    }
}

export default levelOne