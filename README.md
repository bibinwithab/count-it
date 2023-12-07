# Count It - React Word Counter App

![React](https://img.shields.io/badge/React-17.0.2-blue) ![Vite](https://img.shields.io/badge/Vite-2.6.0-brightgreen)

This is a simple React application created using Vite that allows users to input or paste text and get information about the word count and estimated reading time.

### Features

- **Word Count**: Displays the number of words in the provided text.
- **Estimated Reading Time**: Calculates and displays the estimated reading time based on an assumed reading speed of 130 words per minute.
- **ClipBoard Integration**: Includes a button that allows users to paste text from the clipboard.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/count-it.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coint-it
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173` in your browser.

### Demo

Visit the live demo - [Count It]((https://count-it-eight.vercel.app/))

### Usage

1. Enter or paste your text into the provided textarea.
2. Optionally, click the "Click To Paste text From Clipboard" button to paste text from the clipboard.
3. The app will display the word count and the estimated reading time based on the input text.

### Code Explanation

- `App.js`: The main component that manages the state of the input text and renders the Word Counter and Length Guesser components.

- `LengthGuesser.js`: Component that calculates and displays the estimated reading time based on the word count.

- `WordCounter.js`: Component that counts and displays the number of words in the provided text.

### Clipboard Integration

The app includes a button that allows users to paste text from the clipboard. It uses the `navigator.clipboard.readText()` API to read text from the clipboard asynchronously.

```javascript
const handlePasteButton = async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
  } catch (error) {
    console.error("Failed to Paste text from Clipboard" + error);
  }
};
```

### Dependencies

The app is built using Vite, React, and the Clipboard API.

### Contribution
Feel free to contribute, report issues, or suggest improvements!
