import { useState } from 'react'
import './App.css'
import LengthGuesser from './components/LengthGuesser'
import WordCounter from './components/WordCounter'

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <textarea value={text} onChange={handleChange} />
      <WordCounter text={text}/>
      <LengthGuesser text={text}/>
    </>
  )
}

export default App
