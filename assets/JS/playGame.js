import loadCombatWindow from "./loadCombatWindow.js"
import introText from "./introText.js"

const playGame = player => {
    loadCombatWindow()

    const display = document.querySelector('#display')
    const controls = document.querySelector('#controls')

    introText(controls)
    
}

export default playGame