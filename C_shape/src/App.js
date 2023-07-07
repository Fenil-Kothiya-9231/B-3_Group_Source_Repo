import React, { useState } from 'react';
import './App.css';

const Box = ({ onClick, isClicked }) => {
  const boxColor = isClicked ? 'green' : 'white';
  return (
    <div className={`box ${boxColor}`} onClick={onClick}>
    </div>
  );
};

const App = () => {
  const [boxStates, setBoxStates] = useState(Array(7));

  const handleClick = (index) => {
    const updatedBoxStates = [...boxStates];
    updatedBoxStates[index] = !updatedBoxStates[index];
    setBoxStates(updatedBoxStates);
  };

  return (
    <div className='appdiv'>
      <h1>C-Shape Problem Version(v.1.0.fe)</h1>
      <div className="row">
        <Box onClick={() => handleClick(0)} isClicked={boxStates[0]} />
        <Box onClick={() => handleClick(1)} isClicked={boxStates[1]} />
        <Box onClick={() => handleClick(2)} isClicked={boxStates[2]} />
      </div>
      <div className="row">
        <Box onClick={() => handleClick(3)} isClicked={boxStates[3]} />
      </div>
      <div className="row">
        <Box onClick={() => handleClick(4)} isClicked={boxStates[4]} />
        <Box onClick={() => handleClick(5)} isClicked={boxStates[5]} />
        <Box onClick={() => handleClick(6)} isClicked={boxStates[6]} />
      </div>
    </div>
  );
};

export default App;
