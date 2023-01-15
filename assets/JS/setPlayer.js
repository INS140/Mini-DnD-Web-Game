import {Fighter, Wizard, Paladin} from "./classOptions.js"

// Creates a new player
const setPlayer = (name, classType) => {
    let player = null
    switch (classType) {
        case 'fighter':
            player = new Fighter(name)
            break;
        case 'wizard':
            player = new Wizard(name)
            break;
        case 'paladin':
            player = new Paladin(name)
            break;
    }
    return player
}

export default setPlayer