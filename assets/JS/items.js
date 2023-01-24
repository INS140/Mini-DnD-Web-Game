import game from "./game.js"

class Item {
    constructor(name, url) {
        this.name = name
        this.url = url
    }
}

class HealingPotion extends Item {
    constructor() {
        super('Healing Potion', './assets/images/healing-potion.png')
    }

    async useEffect() {
        game.controls.innerHTML = `<h2></h2>`

        const heal = Math.min(game.player.hpMax-game.player.hp, Math.ceil(game.player.hpMax/2))
        console.log(heal)

        await game.textDisplay(`${game.player.name} heals for ${heal}hp!`, document.querySelector('h2'))

        game.player.hp += heal

        game.setPlayerStats()
    }
}

class SpellPotion extends Item {
    constructor() {
        super('Spell Potion', './assets/images/spell-potion.png')
    }

    async useEffect() {
        game.controls.innerHTML = `<h2></h2>`

        const heal = Math.min(game.player.spMax-game.player.sp, Math.ceil(game.player.spMax/2))
        console.log(heal)

        await game.textDisplay(`${game.player.name} heals for ${heal}sp!`, document.querySelector('h2'))

        game.player.sp += heal

        game.setPlayerStats()
    }
}

export { HealingPotion, SpellPotion }