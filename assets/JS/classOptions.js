import game from "./game.js"

class Player {
    constructor(name, hp, ac, init, atkDmg) {
        this.name = name
        this.hp = hp
        this.ac = ac
        this.init = init
        this.atkDmg = atkDmg
    }
}

class Fighter extends Player {
    constructor(name) {
        super(name, 100, 15, 11, 10)
    }
}

class Wizard extends Player {
    constructor(name) {
        super(name, 60, 12, 13, 20, 15)
    }
}

class Paladin extends Player {
    constructor(name) {
        super(name, 80, 14, 12, 10)
    }
}

export {Fighter, Wizard, Paladin}