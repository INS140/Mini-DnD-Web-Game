import { useEffect, useState, useRef } from 'react'

export default function useTextDisplay(str) {
  const [ text, setText ] = useState('')
  const timer = useRef()

  function stopTimer() {
    clearTimeout(timer.current)
  }

  useEffect(() => {
    (async () => {
      for (const char of str.split('')) {
        await new Promise(res => timer.current = setTimeout(res, 30))
          .then(() => setText(prev => prev += char))
      }
      await new Promise(res => timer.current = setTimeout(res, 250))

      return stopTimer
    })()
  }, [str])

  return { text, stopTimer }
}