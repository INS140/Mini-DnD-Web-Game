import game from "./game.js"
import { HealingPotion, SpellPotion } from "./items.js"
import { Frostbolt, Fireball, LightningBolt, Smite, HolyFire } from "./spells.js"
import { Greatsword, Quarterstaff, Warhammer } from "./weapons.js"

class Player {
    constructor(name, hp, ac, sp, atkMod, dmgMod, weapon) {
        this.name = name
        this.hp = hp
        this.hpMax = hp
        this.ac = ac
        this.sp = sp
        this.spMax = sp
        this.atkMod = atkMod
        this.dmgMod = dmgMod
        this.defBoost = 2
        this.defending = false
        this.weapon = weapon
    }

    getDmg() {
        return Math.max(game.player.weapon.getWeaponDmg() + this.dmgMod, 1) // Ensures player does at least 1 damage on hit
    }

    getCritDmg() {
        return game.player.weapon.getWeaponCrit() + this.dmgMod
    }
}

class SpellCaster extends Player {
    constructor(name, hp, ac, sp, atkMod, dmgMod, spellMod, weapon) {
        super(name, hp, ac, sp, atkMod, dmgMod, weapon)
        this.spellMod = spellMod
        this.spells = []
        this.spellChoise = null
        this.casting = false
    }

    async loadAttackOptions() {

        console.log('hello')
        game.controls.innerHTML = `
            <h2 id="spell-h2"></h2>
            <div class="grid-2">
                <button id="melee">Melee</button>
                <button id="spell">Spell</button>
            </div>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#melee').onclick = game.attack
        document.querySelector('#spell').onclick = game.player.loadSpells
        document.querySelector('#cancel').onclick = game.loadActions

        await game.textDisplay(`Select an attack type`, document.querySelector('h2'))
    }

    async loadSpells() {
        game.controls.innerHTML = `
            <h2 id="text"></h2>
            <button id="cancel">Cancel</button>
        `

        const spellWindow = document.createElement('div')
        spellWindow.classList.add('display-box', 'grid-4', 'fixed-center')
        

        game.player.spells.forEach(spell => {
            const spellCard = document.createElement('div')
            spellCard.classList.add('spell-card')
            spellCard.innerHTML = `
                <h2>${spell.name}</h2>
                <h4>SP Cost: ${spell.spCost}</h4>
            `

            spellWindow.append(spellCard)

            spellCard.onclick = async () => {
                if (game.player.sp >= spell.spCost) {
                    spellWindow.remove()

                    game.player.spellChoise = spell

                    game.player.casting = true

                    game.attack()
                } else {
                    await game.textDisplay(`You do not have enough spell points . . .`, document.querySelector('#text'))
                }
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
        super(name, 100, 16, 0, 7, 4, new Greatsword)
        this.inventory = [
            new HealingPotion,
            new HealingPotion,
            new HealingPotion
        ]
    }
}

class Wizard extends SpellCaster {
    constructor(name) {
        super(name, 60, 12, 35, 3, -1, 7, new Quarterstaff)
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
        super(name, 80, 15, 15, 7, 3, 7, new Warhammer)
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