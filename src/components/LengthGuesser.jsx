/* eslint-disable react/prop-types */

const LengthGuesser = ({text}) => {
  
    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;
    const WPM = 125;
    const minutes = Math.floor(wordCount / WPM);
    const seconds = Math.round((wordCount % WPM) / (WPM/60));
  
    return (
    <div>
        <p>Length: {minutes} minutes and {seconds} seconds long</p>
    </div>
  )
}

export default LengthGuesser