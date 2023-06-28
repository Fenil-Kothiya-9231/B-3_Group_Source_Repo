import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import AlphabetButtons from './components/AlphabetButtons';
import NamesList from './components/NamesList';

const App = () => {
  return (
    <div className="container">
      <InputForm />
      <AlphabetButtons />
      <NamesList />
    </div>
  );
};

export default App;
