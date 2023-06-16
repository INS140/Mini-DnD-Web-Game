import StartGame from "./StartGame"
import StartLevelOne from "./StartLevelOne"
import Controls from "./Controls"
import QuitGame from "./QuitGame"
import Actions from "./Actions"
import SelectTarget from "./SelectTarget"
import RollingDice from "./RollingDice"

export const controls = {
  actions: <Actions />,
  controls: <Controls />,
  selectTarget: <SelectTarget />,
  startGame: <StartGame />,
  startLevelOne: <StartLevelOne />,
  quit: <QuitGame />,
  rollingPlayerAttack: <RollingDice next="actions" />
}