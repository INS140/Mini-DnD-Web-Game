import getMonsters from "./getMonsters.js"

const levelOne = () => {
    controls.innerHTML = null
    let monsters = getMonsters(1),
        monsterImages = document.createElement('div'),
        idNum = 0
    
    monsterImages.classList.add('monsterImages')

    monsters.forEach(monster => {
        console.log(monster)
        let img = document.createElement('img')
        img.src = monster.url
        img.width = monster.imgWidth
        img.id = `${monster.name}${idNum}`
        idNum++
        monsterImages.append(img)
    })

    display.append(monsterImages)
}

export default levelOne