import game from "./game.js"
import { Kobold, Slime, Skeleton, Zombie } from "./monsterTypes.js"

const levelOne = {

    monsters: [],

    display: null,

    controls: null,

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

    start: () => {
        levelOne.display = document.querySelector('#display')
        levelOne.controls = document.querySelector('#controls')

        levelOne.controls.innerHTML = null

        levelOne.getMonsters()
        
        let monsterImages = document.createElement('div'),
            idNum = 0
        
        monsterImages.classList.add('monsterImages')

        levelOne.monsters.forEach((monster, index) => {
            monster.img = document.createElement('img')
            monster.img.src = monster.url
            monster.img.width = monster.imgWidth
            monster.img.id = `${monster.name}${idNum}`
            monster.img.alt = monster.name
            idNum++
            monsterImages.append(monster.img)
        })

        levelOne.display.append(monsterImages)
        levelOne.controls.innerHTML = `
            <p>After a short venture into the tomb, you are attacked by a group of ${levelOne.monsters[0].name}s! Prepare for battle!</p>
            <button id="continue">Continue</button>
        `

        document.querySelector('#continue').onclick = () => {
            game.loadControls()
        }
    },

    reset: () => {
        levelOne.monsters = []
        levelOne.controls = null
        levelOne.display = null 
    }
}

export default levelOne