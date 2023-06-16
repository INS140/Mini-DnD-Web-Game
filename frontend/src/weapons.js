import { rollDice } from "./GameFunctions"

class Weapon {
    constructor(name, numOfDice, diceSides) {
        this.name = name
        this.numOfDice = numOfDice
        this.diceSides = diceSides
    }

    getWeaponDmg(atkRoll) {
        const numOfDice = atkRoll === 20 ? this.numOfDice*2 : this.numOfDice
        return rollDice(numOfDice, this.diceSides)
    }
}

class Greatsword extends Weapon {
    constructor() {
        super('Greatsword', 2, 6)
    }
}

class Quarterstaff extends Weapon {
    constructor() {
        super('Quarterstaff', 1, 6)
    }
}

class Warhammer extends Weapon {
    constructor() {
        super('Warhammer', 1, 8)
    }
}

export { Greatsword, Quarterstaff, Warhammer }