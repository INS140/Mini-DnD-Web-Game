import game from "./game.js"

class Monster {
    constructor(name, hp, ac, url, imgWidth) {
        //combat properties
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.dead = false

        //display properties
        this.img = null
        this.url = url
        this.imgWidth = imgWidth + 'px'
    }

    getDmg() {
        return game.rollDice(1, 6)
    }

    getCritDmg() {
        return game.rollDice(2, 6)
    }
}

// Low level
class Kobold extends Monster {
    constructor() {
        super('Kobold', 10, 10, './assets/images/kobold.png', 100)
    }
}

class Slime extends Monster {
    constructor() {
        super('Slime', 15, 12, './assets/images/slime.png', 200)
    }
}

class Skeleton extends Monster {
    constructor() {
        super('Skeleton', 8, 10, './assets/images/skeleton.png', 150)
    }
}

class Zombie extends Monster{
    constructor() {
        super('Zombie', 12, 8, './assets/images/zombie.png', 150)
    }
}

//Mid level

class Elemental extends Monster {
    constructor() {
        super('Elemental', 25, 13, null, 150)
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
            this.imgWidth = 125 + 'px'
        }
    }
}

class Armor extends Monster {
    constructor() {
        super('Animated-Armor', 35, 15, './assets/images/armor.png', 150)
    }
}

class Gnoll extends Monster {
    constructor() {
        super('Gnoll', 22, 12, './assets/images/gnoll.png', 150)
    }
}

// BBEG

class Lich {
    constructor() {
        this.hp = 10
        this.ac = 10
        this.init = 0
        this.url = '../images/lich.png'
    }
}

class Dragon {
    constructor() {
        this.hp = 100
        this.ac = 10
        this.init = 0
        this.url = '../images/dragon.png'
    }
}

class Tarrasque {
    constructor() {
        this.hp = 1000
        this.ac = 10
        this.init = 0
        this.url = '../images/tarrasque.png'
    }
}

export {Kobold, Slime, Skeleton, Zombie, Elemental, Armor, Gnoll, Lich, Dragon, Tarrasque}