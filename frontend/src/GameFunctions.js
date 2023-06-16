function rollDice(numOfRolls, sides) {
  return Array(numOfRolls).fill(sides).reduce((s, d) => s + Math.floor(Math.random()*d) + 1, 0)
}

function populateMonsters(arr, num, type) {
  for (let i = 0; i < num; i++) { arr.push(new type()) }
}

function playerAttack(character, target) {
  let dmg = 0,
      inputText = 'You missed . . .',
      next = 'monsterAttackPhase'

  const atkMod = character.casting ? character.spellMod : character.atkMod

  const atkRoll = rollDice(1, 20)

  if (atkRoll + atkMod >= target.ac || atkRoll === 20) {
    dmg = character.casting
      ? character.spellChoise.getDmg(atkRoll)
      : character.getDmg(atkRoll)

    inputText = atkRoll === 20
      ? `Critical Hit! You deal ${dmg} to ${target.name}`
      : `You hit ${target.name} for ${dmg}!`

  }
  
  return { dmg, inputText, next }
}

export { rollDice, populateMonsters, playerAttack }