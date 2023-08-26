import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "On top an oval green with scattered paths, stands a quiet place where stories lay";
  const answer = 'thompson library';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Thompson.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
