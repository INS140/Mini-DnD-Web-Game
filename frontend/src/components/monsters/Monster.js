export default function Monster({ monster, index }) {
  return <div>
    <span id={`${monster.name}${index}-hp-bar`}>{monster.hp}/{monster.hpMax}</span>
    <img id={`${monster.name}${index}`} src={monster.url} alt={monster.name}/>
  </div>
}