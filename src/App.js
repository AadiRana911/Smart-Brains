import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


const app = new Clarifai.App(
  {
    apiKey: '5525e071c1944f3a80bf1189a62a30d4'
  }
);

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col *width),
      bottomRow: height - (clarifaiFace.bottom_row *height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
    
  }

  render(){
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particleOptions} 
        />
        <Navigation/>
        <Logo/>
        <Rank/>
         <ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onButtonSubmit = {this.onButtonSubmit}
         />
        <FaceRecognition imageUrl = { this.state.imageUrl } />
      </div>
    );
  }
  
}

export default App;
