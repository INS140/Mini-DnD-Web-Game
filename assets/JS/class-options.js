import game from "./game.js"
import { HealingPotion, SpellPotion } from "./items.js"
import { Frostbolt, Fireball, LightningBolt, Smite, HolyFire } from "./spells.js"

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

    getDmg() {
        return game.rollDice(1, 8)
    }

    getCritDmg() {
        return game.rollDice(2, 8)
    }
}

class SpellCaster extends Player {
    constructor(name, hp, ac, sp, atkDmg) {
        super(name, hp, ac, sp, atkDmg)
        this.spells = []
        this.spellChoise = null
        this.casting = false
    }

    async loadAttackOptions() {
        game.controls.innerHTML = `
            <h2 id="spell-h2"></h2>
            <div class="grid-2">
                <button id="melee">Melee</button>
                <button id="spell">Spell</button>
            </div>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#melee').onclick = game.attack
        document.querySelector('#spell').onclick = this.loadSpells
        document.querySelector('#cancel').onclick = game.loadActions

        await game.textDisplay(`Select an attack type`, document.querySelector('h2'))
    }

    async loadSpells() {
        game.controls.innerHTML = `
            <h2 id="text"></h2>
            <button id="cancel">Cancel</button>
        `

        let spellWindow = document.createElement('div')
        spellWindow.classList.add('display-box', 'grid-4', 'fixed-center')
        

        game.player.spells.forEach(spell => {
            let spellCard = document.createElement('div')
            spellCard.classList.add('spell-card')
            spellCard.innerHTML = `
                <h2>${spell.name}</h2>
                <h4>SP Cost: ${spell.spCost}</h4>
            `

            spellWindow.append(spellCard)

            spellCard.onclick = async () => {
                spellWindow.remove()

                game.player.spellChoise = spell

                game.player.casting = true

                game.attack()
            }
        })

        document.querySelector('.combat-window').append(spellWindow)

        document.querySelector('#cancel').onclick = () => {
            game.loadActions()
            spellWindow.remove()
        }

        await game.textDisplay(`Choose a spell to cast`, document.querySelector('#text'))
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
        super(name, 60, 12, 20, 100)
        this.inventory = [
            new HealingPotion,
            new SpellPotion,
            new SpellPotion
        ]
        this.spells = [
            new Frostbolt,
            new Fireball,
            new LightningBolt
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
        this.spells = [
            new Smite,
            new HolyFire
        ]
    }
}

export { Fighter, Wizard, Paladin, SpellCaster }