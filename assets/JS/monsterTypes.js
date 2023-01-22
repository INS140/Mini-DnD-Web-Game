import game from "./game.js"

class Monster {
    constructor(name, hp, ac, init, url, imgWidth) {
        //combat properties
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.init = init
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
        super('Kobold', 10, 10, 8, './assets/images/kobold.png', 100)
    }
}

class Slime extends Monster {
    constructor() {
        super('Slime', 15, 12, 5, './assets/images/slime.png', 200)
    }
}

class Skeleton extends Monster {
    constructor() {
        super('Skeleton', 8, 10, 10, './assets/images/skeleton.png', 150)
    }
}

class Zombie extends Monster{
    constructor() {
        super('Zombie', 12, 8, 0, './assets/images/zombie.png', 150)
    }
}

//Mid level

class Elemental {
    constructor() {
        this.hp = 10
        this.ac = 10
        this.init = 0
        this.url = null
    }
}

class Armor {
    constructor() {
        this.hp = 10
        this.ac = 10
        this.init = 0
        this.url = '../images/armor.png'
    }
}

class Gnoll {
    constructor() {
        this.hp = 10
        this.ac = 10
        this.init = 0
        this.url = '../images/gnoll.png'
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

export {Kobold, Slime, Skeleton, Zombie}