import { useState, useEffect } from "react"

export default function useHealthColors(hp, max) {
  const [ colors, setColors ] = useState({
    background: 'green',
    text: 'white'
  })

  useEffect(() => {
    let color = hp > max*60/100
      ? { background: 'green', text: 'white' }
      : hp > max*20/100
        ? { background: 'yellow', text: 'black' }
        : { background: 'red', text: 'white' }
    setColors(color)
  }, [hp])

  return colors
}