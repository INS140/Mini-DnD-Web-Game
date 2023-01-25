class Spell {
    constructor(name, spCost) {
        this.name = name
        this.spCost = spCost
    }
}

/////////////////
//Wizard Spells//
/////////////////
class Frostbolt extends Spell {
    constructor() {
        super('Frostbolt', 2)
    }
}

class Fireball extends Spell {
    constructor() {
        super('Fireball', 3)
    }
}

class LightningBolt extends Spell {
    constructor() {
        super('Lightning Bolt', 5)
    }
}

//////////////////
//Paladin Spells//
//////////////////
class Smite extends Spell {
    constructor() {
        super('Smite', 2)
    }
}

class HolyFire extends Spell {
    constructor() {
        super('Holy Fire', 3)
    }
}

export { Frostbolt, Fireball, LightningBolt, Smite, HolyFire }