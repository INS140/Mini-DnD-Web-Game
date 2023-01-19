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
        }
    }
}

// const levelOne = player => {
//     const display = document.querySelector('#display')

//     controls.innerHTML = null

//     let monsters = getMonsters(1),
//         monsterImages = document.createElement('div'),
//         idNum = 0
    
//     monsterImages.classList.add('monsterImages')

//     monsters.forEach(monster => {
//         let img = document.createElement('img')
//         img.src = monster.url
//         img.width = monster.imgWidth
//         img.id = `${monster.name}${idNum}`
//         img.alt = monster.name
//         idNum++
//         monsterImages.append(img)
//     })

//     display.append(monsterImages)
//     controls.innerHTML = `
//         <p>After a short venture into the tomb, you are attacked by a group of ${monsters[0].name}s! Prepare for battle!</p>
//         <button id="continue">Continue</button>
//     `

//     document.querySelector('#continue').onclick = () => {
//         game.loadControls()
        
//         document.querySelector('#actions').onclick = () => {
//             game.player.loadActions(controls)
//         }
//     }

    
// }

export default levelOne