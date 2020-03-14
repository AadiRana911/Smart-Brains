import React from 'react';
import 'tachyons';
import Particles from 'react-particles-js';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particleOptions = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation/>
      <Logo/>
      <Rank/>
       <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
