import { useState } from "react";
import "./App.css";
import LengthGuesser from "./components/LengthGuesser";
import WordCounter from "./components/WordCounter";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
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
        <WordCounter text={text} />
        <LengthGuesser text={text} />
      </div>
    </>
  );
}

export default App;
