import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

function AudioPlayer({ audioSrc }) {
  return (
    <div>
      <h2>Here's the mission, listen carefully</h2>
      <p>Example</p>
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay
        controls
      />
      <h2>Shhhhhhh... this mission requires a secret agent to infiltrate the building and take a recon photo of the rest of their team from the ___ floor inside the building. Make sure to be very very quiet. Your team should be standing near the entracne of the buildling on the stature side. Give us your best post</h2>
    </div>
  );
}

export default AudioPlayer;
