export default function GameFunctions() {
  function rollDice(numOfRolls, sides) {
    return Array(numOfRolls).fill(sides).reduce((s, d) => s + Math.floor(Math.random()*d) + 1, 0)
  }

  function populateMonsters(arr, num, type) {
    for (let i = 0; i < num; i++) { arr.push(new type) }
  }

  return { rollDice, populateMonsters }
}