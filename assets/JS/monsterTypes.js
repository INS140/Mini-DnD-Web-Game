// Low level
class Kobold {
    constructor() {
        this.name = 'kobold'
        this.hp = 10
        this.ac = 8
        this.init = 8
        this.url = './assets/images/kobold.png'
        this.imgWidth = 100
    }
}

class Slime {
    constructor() {
        this.name = 'slime'
        this.hp = 15
        this.ac = 12
        this.init = 5
        this.url = './assets/images/slime.png'
        this.imgWidth = 200
    }
}

class Skeleton {
    constructor() {
        this.name = 'skeleton'
        this.hp = 8
        this.ac = 10
        this.init = 10
        this.url = './assets/images/skeleton.png'
        this.imgWidth = 150
    }
}

class Zombie {
    constructor() {
        this.name = 'zombie'
        this.hp = 12
        this.ac = 8
        this.init = 0
        this.url = './assets/images/zombie.png'
        this.imgWidth = 150
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