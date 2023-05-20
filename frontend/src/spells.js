import { rollDice } from "./GameFunctions"

class Spell {
    constructor(name, spCost, numOfDice, diceSides) {
        this.name = name
        this.spCost = spCost
        this.numOfDice = numOfDice
        this.diceSides = diceSides
    }

    getDmg() {
        return rollDice(this.numOfDice, this.diceSides)
    }

    getCritDmg() {
        return rollDice(this.numOfDice*2, this.diceSides)
    }
}

/////////////////
//Wizard Spells//
/////////////////
class Frostbolt extends Spell {
    constructor() {
        super('Frostbolt', 2, 2, 8)
    }
}

class Fireball extends Spell {
    constructor() {
        super('Fireball', 3, 3, 8)
    }
}

class LightningBolt extends Spell {
    constructor() {
        super('Lightning Bolt', 5, 4, 6)
    }
}

//////////////////
//Paladin Spells//
//////////////////
class Smite extends Spell {
    constructor() {
        super('Smite', 2, 2, 8)
    }

    // getDmg() {
    //     return rollDice(this.numOfDice, this.diceSides) + player.getDmg()
    // }

    // getCritDmg() {
    //     return rollDice(this.numOfDice*2, this.diceSides) + player.getCritDmg()
    // }
}

class HolyFire extends Spell {
    constructor() {
        super('Holy Fire', 3, 3, 8)
    }
}

export { Frostbolt, Fireball, LightningBolt, Smite, HolyFire }