/* eslint-disable react/prop-types */

function WordCounter({ text }) {
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div>
      <p>Word Count: {wordCount} words</p>
    </div>
  );
}

export default WordCounter;
