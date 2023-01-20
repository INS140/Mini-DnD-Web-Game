import game from "./game.js"

class Fighter {
    constructor(name) {
        this.name = name
        this.hp = 100
        this.ac = 15
        this.init = 11
        this.atkDmg = 10
    }
}

class Wizard {
    constructor(name) {
        this.name = name
        this.hp = 60
        this.ac = 12
        this.init = 13
        this.sp = 20
    }
}

class Paladin {
    constructor(name) {
        this.name = name
        this.hp = 80
        this.ac = 14
        this.init = 12
        this.sp = 10
    }
}

export {Fighter, Wizard, Paladin}