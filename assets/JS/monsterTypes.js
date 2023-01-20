class Monster {
    constructor(name, hp, ac, init, url, imgWidth) {
        //combat properties
        this.name = name
        this.hp = hp
        this.ac = ac
        this.init = init
        this.atkDmg = 3

        //display properties
        this.img = null
        this.url = url
        this.imgWidth = imgWidth
    }
}

// Low level
class Kobold extends Monster {
    constructor() {
        super('kobold', 10, 10, 8, './assets/images/kobold.png', 100)
    }
}

class Slime extends Monster {
    constructor() {
        super('slime', 15, 12, 5, './assets/images/slime.png', 200)
    }
}

class Skeleton extends Monster {
    constructor() {
        super('skeleton', 8, 10, 10, './assets/images/skeleton.png', 150)
    }
}

class Zombie extends Monster{
    constructor() {
        super('zombie', 12, 8, 0, './assets/images/zombie.png', 150)
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