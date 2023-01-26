import game from "./game.js"

class Monster {
    constructor(name, hp, ac, atkMod, dmgMod, url, imgWidth) {
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
        this.imgWidth = imgWidth + 'px'
    }

    getDmg() {
        return game.rollDice(1, 6) + this.dmgMod
    }

    getCritDmg() {
        return game.rollDice(2, 6) + this.dmgMod
    }
}

// Low level
class Kobold extends Monster {
    constructor() {
        super('Kobold', Math.max(game.rollDice(2, 6) -2, 5), 12, 2, 2, './assets/images/kobold.png', 80)
    }
}

class Slime extends Monster {
    constructor() {
        super('Slime', Math.max(game.rollDice(3, 8) + 9, 22), 8, 3, 1, './assets/images/slime.png', 200)
    }
}

class Skeleton extends Monster {
    constructor() {
        super('Skeleton', Math.max(game.rollDice(2, 8) + 4, 13), 13, 4, 2, './assets/images/skeleton.png', 150)
    }
}

class Zombie extends Monster{
    constructor() {
        super('Zombie', Math.max(game.rollDice(3, 8) + 9, 22), 8, 3, 1, './assets/images/zombie.png', 150)
    }
}

//Mid level

class Elemental extends Monster {
    constructor() {
        super('Elemental', Math.max(game.rollDice(8, 10) + 20, 64), 14, 6, 3, null, 200)
    }

    setImage() {
        const d100 = game.rollDice(1, 100)

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
}

class Armor extends Monster {
    constructor() {
        super('Animated-Armor', Math.max(game.rollDice(6, 8) + 6, 33), 18, 4, 2, './assets/images/armor.png', 150)
    }
}

class Gnoll extends Monster {
    constructor() {
        super('Gnoll', Math.max(game.rollDice(5, 8), 22), 12, 4, 2, './assets/images/gnoll.png', 150)
    }
}

// BBEG

class Lich extends Monster{
    constructor() {
        super('Lich', Math.max(game.rollDice(18, 8) + 54, 135), 17, 12, 0, './assets/images/lich.png', 300)
    }
}

class Dragon extends Monster{
    constructor() {
        super('Dragon', Math.max(game.rollDice(17, 12) + 85, 195), 19, 11, 6, './assets/images/dragon.png', 500)
    }
}

class Tarrasque extends Monster {
    constructor() {
        super('Tarrasque', Math.max(game.rollDice(33, 20) + 330, 676), 25, 19, 10, './assets/images/tarrasque.png', 350)
    }
}

export {Kobold, Slime, Skeleton, Zombie, Elemental, Armor, Gnoll, Lich, Dragon, Tarrasque}