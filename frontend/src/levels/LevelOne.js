import { Kobold, Skeleton, Slime, Zombie } from '../monster-types'
import { rollDice, populateMonsters } from '../GameFunctions'

export default function LevelOne() {
  let d100 = rollDice(1, 100),
    arr = []

  if (d100 > 90) populateMonsters(arr, 5, Kobold)
  else if (d100 > 60) populateMonsters(arr, 4, Skeleton)
  else if (d100 > 30) populateMonsters(arr, 3, Slime)
  else populateMonsters(arr, 3, Zombie)

  return arr
}