import getMonsters from "./getMonsters.js"
import loadControls from "./loadControls.js"

const levelOne = player => {
    const display = document.querySelector('#display')

    controls.innerHTML = null

    let monsters = getMonsters(1),
        monsterImages = document.createElement('div'),
        idNum = 0
    
    monsterImages.classList.add('monsterImages')

    monsters.forEach(monster => {
        let img = document.createElement('img')
        img.src = monster.url
        img.width = monster.imgWidth
        img.id = `${monster.name}${idNum}`
        img.alt = monster.name
        idNum++
        monsterImages.append(img)
    })

    display.append(monsterImages)
    controls.innerHTML = `
        <p>After a short venture into the tomb, you are attacked by a group of ${monsters[0].name}s! Prepare for battle!</p>
        <button id="continue">Continue</button>
    `

    document.querySelector('#continue').onclick = () => {
        loadControls()
        // document.querySelector('#actions').onclick = () => {
        //     player.loadActions(controls)
        // }
    }

    
}

export default levelOne