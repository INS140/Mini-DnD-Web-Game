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

        levelOne.monsters.forEach(monster => {
            let img = document.createElement('img')
            img.src = monster.url
            img.width = monster.imgWidth
            img.id = `${monster.name}${idNum}`
            img.alt = monster.name
            idNum++
            monsterImages.append(img)
        })

        levelOne.display.append(monsterImages)
        levelOne.controls.innerHTML = `
            <p>After a short venture into the tomb, you are attacked by a group of ${levelOne.monsters[0].name}s! Prepare for battle!</p>
            <button id="continue">Continue</button>
        `

        document.querySelector('#continue').onclick = () => {
            game.loadControls()
            
            document.querySelector('#actions').onclick = () => {
                game.player.loadActions(controls)
            }

            document.querySelector('#quit').onclick = () => {
                levelOne.controls.innerHTML = `
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
        }
    },

    reset: () => {
        levelOne.monsters = []
        levelOne.controls = null
        levelOne.display = null 
    }
}

export default levelOne