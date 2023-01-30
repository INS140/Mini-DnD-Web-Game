import React from "react"
import game from "./game.js"
import './styles.css'

const components = {
    mainMenu: () => {
        return (
            <div className="menu">
                <h1>Dungeon Crawl</h1>
                <hr />
                <button id="play-now" onClick={game.playNow}>Play Now</button><br />
                <button id="new-game" onClick={game.loadNewGameMenu}>New Game</button><br />
                <button id="load-game">Load Game</button><br />
                <button id="options">Options</button>
            </div>
        )
    },

    newGameMenu: () => {
        return (
            <div className="menu new-game">
                <h2>New Game</h2>
                <hr />
                <label>Character Name<br />
                    <input type="text" name="name" id="name" />
                </label><br />
                <label>Select Class<br />
                    <select id="class-select" name="class-select">
                        <option value="fighter">Fighter</option>
                        <option value="wizard">Wizard</option>
                        <option value="paladin">Paladin</option>
                    </select>
                </label><br />
                <hr />
                <button id="cancel" onClick={game.loadMainMenu}>Cancel</button>
                <button id="start">Start Game</button>
            </div>
        )
    }
}

export default components