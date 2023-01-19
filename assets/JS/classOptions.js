import game from "./game.js"
import levelOne from "./levelOne.js"

class Fighter {
    constructor(name) {
        this.name = name
        this.hp = 100
        this.ac = 15
        this.init = 11
        this.atkDmg = 10
    }

    attack() {
        game.currentLevel.controls.innerHTML = `
            <h2>Select a target</h2>
            <button id="cancel">Cancel</button>
        `

        document.querySelector('#cancel').onclick = game.loadActions

        game.currentLevel.monsters.forEach(monster => {
            monster.img.addEventListener('click', () => {
                monster.hp -= game.player.atkDmg
                console.log(monster.hp)
                if (monster.hp <= 0) {
                    monster.img.remove()
                }
            })
        })
    }
}

class Wizard {
    constructor(name) {
        this.name = name
        this.hp = 60
        this.ac = 12
        this.init = 13
        this.sp = 20
    }
}

class Paladin {
    constructor(name) {
        this.name = name
        this.hp = 80
        this.ac = 14
        this.init = 12
        this.sp = 10
    }
}

export {Fighter, Wizard, Paladin}