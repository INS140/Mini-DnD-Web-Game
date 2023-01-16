const loadCombatWindow = () => {
    root.innerHTML = null
    const combatWindow = document.createElement('div')
    combatWindow.classList.add('combatWindow')
    combatWindow.innerHTML = `
        <div id="display"></div>
        <div id="interface"></div>
    `
    root.append(combatWindow)
}

export default loadCombatWindow