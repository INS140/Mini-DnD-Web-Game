import { HealingPotion, SpellPotion } from "./items.js"

class Player {
    constructor(name, hp, ac, sp, atkDmg) {
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.sp = sp
        this.spMax = sp
        this.atkDmg = atkDmg
        this.defBoost = 2
        this.defending = false
    }
}

class Fighter extends Player {
    constructor(name) {
        super(name, 100, 15, 0, 10)
        this.inventory = [
            new HealingPotion,
            new HealingPotion,
            new HealingPotion
        ]
    }
}

class Wizard extends Player {
    constructor(name) {
        super(name, 60, 12, 20, 15)
        this.inventory = [
            new HealingPotion,
            new SpellPotion,
            new SpellPotion
        ]
    }
}

class Paladin extends Player {
    constructor(name) {
        super(name, 80, 14, 10, 12)
        this.inventory = [
            new HealingPotion,
            new HealingPotion,
            new SpellPotion
        ]
    }
}

export { Fighter, Wizard, Paladin }