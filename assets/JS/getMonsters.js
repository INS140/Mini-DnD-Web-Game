import {Kobold, Slime, Skeleton, Zombie} from "./monsterTypes.js"

const getMonsters = (level) => {
    let d100 = Math.floor(Math.random()*101),
        monsterArray = []
    
    switch (level) {
        case 1:
            if (d100 > 75) {
                for (let i = 0; i < 4; i++) {
                    let monster = new Kobold()
                    monsterArray.push(monster)
                }
            } else if (d100 > 50) {
                for (let i = 0; i < 3; i++) {
                    let monster = new Slime()
                    monsterArray.push(monster)
                }
            } else if (d100 > 25) {
                for (let i = 0; i < 4; i++) {
                    let monster = new Skeleton()
                    monsterArray.push(monster)
                }
            } else {
                for (let i = 0; i < 4; i++) {
                    let monster = new Zombie()
                    monsterArray.push(monster)
                }
            }
            break;
    }

    return monsterArray
}

export default getMonsters