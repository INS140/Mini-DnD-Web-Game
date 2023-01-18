import loadCombatWindow from "./loadCombatWindow.js"
import levelOne from "./levelOne.js"

const playGame = player => {
    loadCombatWindow()

    const controls = document.querySelector('#controls')

    controls.innerHTML = `
        <p>You come across an old abandoned tomb that smells of adventure. 
        Of course you can not resist the temptation of riches, so you brave the deep unknown ...</p>
        <button id="continue">Continue</button>
    `

    document.querySelector('#continue').onclick = () => {
        levelOne(player)
    }
}

export default playGame