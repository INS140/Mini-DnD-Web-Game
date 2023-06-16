import { rollDice } from "./GameFunctions"

class Monster {
    constructor(name, hp, ac, atkMod, dmgMod, url, imgHeight) {
        //combat properties
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.atkMod = atkMod
        this.dmgMod = dmgMod
        this.dead = false

        //display properties
        this.img = null
        this.url = url
        this.imgHeight = imgHeight + '%'
    }

    getDmg() {
        return rollDice(1, 6) + this.dmgMod
    }

    getCritDmg() {
        return rollDice(2, 6) + this.dmgMod
    }
}

// Low level
class Kobold extends Monster {
    constructor() {
        super('Kobold', Math.max(rollDice(2, 6) -2, 5), 12, 2, 2, '../images/kobold.png', 35)
    }
}

class Slime extends Monster {
    constructor() {
        super('Slime', Math.max(rollDice(3, 8) + 9, 22), 8, 3, 1, '../images/slime.png', 50)
    }
}

class Skeleton extends Monster {
    constructor() {
        super('Skeleton', Math.max(rollDice(2, 8) + 4, 13), 13, 4, 2, '../images/skeleton.png', 75)
    }
}

class Zombie extends Monster{
    constructor() {
        super('Zombie', Math.max(rollDice(3, 8) + 9, 22), 8, 3, 1, '../images/zombie.png', 90)
    }
}

//Mid level

class Elemental extends Monster {
    constructor() {
        super('Elemental', Math.max(rollDice(8, 10) + 20, 64), 14, 6, 3, null, 200)
    }

    setImage() {
        const d100 = rollDice(1, 100)

        if (d100 > 75) {
            this.url = './assets/images/fire-elemental.png'
        } else if (d100 > 50) {
            this.url = './assets/images/water-elemental.png'
        } else if (d100 > 25) {
            this.url = './assets/images/earth-elemental.png'
        } else {
            this.url = './assets/images/air-elemental.png'
            this.imgWidth = '160px'
        }
    }

    // setImgWidth() {
    //     if (this.url === './assets/images/air-elemental.png') {
    //         this.imgWidth = Math.floor(100/currentLevel.monsters.length) - 10 + '%'
    //     } else {
    //         if (window.innerWidth <= 400) this.imgWidth = Math.floor(100/currentLevel.monsters.length) + '%'
    //     }
    // }
}

class Armor extends Monster {
    constructor() {
        super('Animated-Armor', Math.max(rollDice(6, 8) + 6, 33), 18, 4, 2, './assets/images/armor.png', 150)
    }
}

class Gnoll extends Monster {
    constructor() {
        super('Gnoll', Math.max(rollDice(5, 8), 22), 12, 4, 2, './assets/images/gnoll.png', 150)
    }
}

// BBEG

class Lich extends Monster{
    constructor() {
        super('Lich', Math.max(rollDice(18, 8) + 54, 135), 17, 12, 0, './assets/images/lich.png', 300)
    }

    // setImgWidth() {
    //     if (window.innerWidth <= 400) {
    //         const width = Math.floor(+document.querySelector('div.monster-images').style.height.split('px')[0] * 215 / 250 - 15)

    //         this.imgWidth = `${width}px`
    //     }
    // }
}

class Dragon extends Monster{
    constructor() {
        super('Dragon', Math.max(rollDice(17, 12) + 85, 195), 19, 11, 6, './assets/images/dragon.png', 500)
    }
}

class Tarrasque extends Monster {
    constructor() {
        super('Tarrasque', Math.max(rollDice(33, 20) + 330, 676), 25, 19, 10, './assets/images/tarrasque.png', 350)
    }

    // setImgWidth() {
    //     if (window.innerWidth <= 400) {
    //         const width = Math.floor(+document.querySelector('div.monster-images').style.height.split('px')[0] * 483 / 500 - 15)
            
    //         this.imgWidth = `${width}px`
    //     }
    // }
}

export {Kobold, Slime, Skeleton, Zombie, Elemental, Armor, Gnoll, Lich, Dragon, Tarrasque}