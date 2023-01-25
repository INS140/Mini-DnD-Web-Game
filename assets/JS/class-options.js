import game from "./game.js"
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

class SpellCaster extends Player {
    constructor(name, hp, ac, sp, atkDmg) {
        super(name, hp, ac, sp, atkDmg)
        this.spells = []
    }

    async loadAttackOptions() {
        game.controls.innerHTML = `
            <h2 id="spell-h2"></h2>
            <div class="grid-2">
                <button id="melee">Melee</button>
                <button id="spell">Spell</button>
            </div>
            <button id="back">Back</button>
        `

        document.querySelector('#melee').onclick = game.attack
        document.querySelector('#spell').onclick = this.loadSpells
        document.querySelector('#back').onclick = game.loadActions

        await game.textDisplay(`Select an attack type`, document.querySelector('h2'))
    }

    loadSpells() {
        game
    }
}

class Fighter extends Player {
    constructor(name) {
        super(name, 100, 15, 0, 100)
        this.inventory = [
            new HealingPotion,
            new HealingPotion,
            new HealingPotion
        ]
    }
}

class Wizard extends SpellCaster {
    constructor(name) {
        super(name, 60, 12, 20, 15)
        this.inventory = [
            new HealingPotion,
            new SpellPotion,
            new SpellPotion
        ]
    }
}

class Paladin extends SpellCaster {
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