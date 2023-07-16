import React, { useState, useEffect } from 'react';
import './App.css';

const Box = ({ onClick, isClicked }) => {
  const boxColor = isClicked ? 'green' : 'white';
  return (
    <div className={`box ${boxColor}`} onClick={onClick}></div>
  );
};

const App = () => {
  const [boxStates, setBoxStates] = useState(Array(7));
  const [ClickedIndexArr, setClickedIndexArr] = useState([]);

  const handleClick = (index) => {
    const updatedBoxStates = [...boxStates];
    updatedBoxStates[index] = !updatedBoxStates[index];
    setBoxStates(updatedBoxStates);

    setClickedIndexArr(prevArr => [...prevArr, index]);
  };

  useEffect(() => {
    if (ClickedIndexArr.length > 0) {
      const timer = setTimeout(() => {
        const lastClickedIndex = ClickedIndexArr[ClickedIndexArr.length - 1];
        const updatedBoxStates = [...boxStates];
        updatedBoxStates[lastClickedIndex] = false;
        setBoxStates(updatedBoxStates);

        setClickedIndexArr(prevArr => prevArr.slice(0, -1));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [ClickedIndexArr, boxStates]);

  return (
    <div className='appdiv'>
      <h1>C-Shape Problem ( Version v.1.0.fe )</h1>
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
      <p>Clicked Indices: {ClickedIndexArr.join(', ')}</p>
    </div>
  );
};

export default App;
