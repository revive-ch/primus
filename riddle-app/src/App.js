import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "Why isn't this working????";
  const answer = 'thompson library';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Thompson.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
