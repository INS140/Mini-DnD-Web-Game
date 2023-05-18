import { useEffect, useState } from 'react'

export default function useTextDisplay(str) {
  const [ text, setText ] = useState('')
  const [ , setTimer ] = useState()

  function stopTimer() {
    setTimer(prev => clearTimeout(prev))
  }

  useEffect(() => {
    (async () => {
      for (const char of str.split('')) {
        await new Promise(res => setTimer(setTimeout(res, 30)))
          .then(() => setText(prev => prev += char))
      }
      await new Promise(res => setTimer(setTimeout(res, 250)))

      return stopTimer
    })()
  }, [str])

  return { text, stopTimer }
}