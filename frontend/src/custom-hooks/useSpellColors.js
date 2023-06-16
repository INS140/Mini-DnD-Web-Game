import { useState, useEffect } from "react"

export default function useSpellColors(sp, max) {
  const [ colors, setColors ] = useState('blue')

  useEffect(() => {
    let color = sp > max*60/100
      ? 'blue'
      : sp > max*20/100
        ? 'purple'
        : 'red'
    setColors(color)
  }, [sp])

  return colors
}