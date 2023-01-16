// Low level
class Kobold {
    constructor() {
        this.hp = 10
        this.ac = 8
        this.init = 8
        this.url = '../images/kobold.png'
    }
}

class Slime {
    constructor() {
        this.hp = 15
        this.ac = 10
        this.init = 5
        this.url = '../images/slime.png'
    }
}

class Skeleton {
    constructor() {
        this.hp = 8
        this.ac = 12
        this.init = 10
        this.url = '../images/skeleton.png'
    }
}

class Zombie {
    constructor() {
        this.hp = 10
        this.ac = 10
        this.init = 0
        this.url = '../images/zombie.png'
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