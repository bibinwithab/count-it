import { useState } from "react";
import "./App.css";
import LengthGuesser from "./components/LengthGuesser";
import WordCounter from "./components/WordCounter";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePasteButton = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (error) {
      console.error("Failed to Paste text from Clipboard" + error);
    }
  };

  return (
    <>
      <div className="Container">
        <h1>Word Counter</h1>
        <textarea
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleChange}
        />
        <button onClick={handlePasteButton}>
          Click To Paste text From Clipboard.
        </button>
        <WordCounter text={text} />
        <LengthGuesser text={text} />
      </div>
    </>
  );
}

export default App;
