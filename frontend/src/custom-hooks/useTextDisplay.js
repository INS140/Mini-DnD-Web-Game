import { useEffect, useState, useRef } from 'react'

export default function useTextDisplay(str, time=30, pause=250) {
  const [ text, setText ] = useState('')
  const [ finished, setFinished ] = useState(false)
  const timer = useRef()

  function stopTimer() {
    clearTimeout(timer.current)
  }

  useEffect(() => {
    (async () => {
      for (const char of str.split('')) {
        await new Promise(res => timer.current = setTimeout(res, time))
          .then(() => setText(prev => prev += char))
      }
      await new Promise(res => timer.current = setTimeout(res, pause))

      setFinished(true)

      return stopTimer
    })()
  }, [str])

  return { text, stopTimer, finished }
}