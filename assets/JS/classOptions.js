import game from "./game.js"

class Player {
    constructor(name, hp, ac, sp, init, atkDmg) {
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.sp = sp
        this.spMax = sp
        this.init = init
        this.atkDmg = atkDmg
        this.defBoost = 2
        this.defending = false
    }
}

class Fighter extends Player {
    constructor(name) {
        super(name, 100, 15, 0, 11, 10)
    }
}

class Wizard extends Player {
    constructor(name) {
        super(name, 60, 12, 20, 13, 15)
    }
}

class Paladin extends Player {
    constructor(name) {
        super(name, 80, 14, 10, 12, 12)
    }
}

export {Fighter, Wizard, Paladin}