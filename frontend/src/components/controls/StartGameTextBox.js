import { useEffect, useState } from 'react'

export default function StartGameTextBox() {
  const [ text, setText ] = useState('')

  const str = `You come across an old abandoned tomb that smells of adventure. 
  Of course you cannot resist the temptation of riches, so you brave the deep unknown . . .`

  let timer

  useEffect(() => {
    (async () => {
      for (const char of str.split('')) {
        await Promise(res => setTimeout(res, 30)).then(() => setText(prev => prev += char))
      }
      await Promise(res => setTimeout(res, 250))
    })()
  }, [])

  return <>
    <p>{ text }</p>
    <button className="continue" onClick={handleClick}>Continue</button>
  </>
}