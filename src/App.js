import React, { Component } from 'react';

import {randomCords} from './Utils';

import GridController from './components/GridController/GridController';
import Sequencer from './components/Sequencer/Sequencer';
import RoverController from './components/RoverController/RoverController';

import PlanetGrid from './components/PlanetGrid/PlanetGrid';

import './App.css';

const gridDimensions = 4;
const sequence = ['l', 'f', 'l', 'f', 'f', 'f', 'f', 'r', 'b', 'b', 'b'];
const initialRoverCords = {x: 1, y: 1};
const initialCardinalDir = 's';
const compassArray = ['n', 'e', 's', 'w'];
const obstacles = [
  { cords: randomCords(gridDimensions), type: 'obstacle'},
  { cords: randomCords(gridDimensions), type: 'obstacle'},
]

class App extends Component {

  constructor() {
    super();
    this.gridController = new GridController(gridDimensions);
    this.sequencer = new Sequencer();
    this.timer = null;

    this.rover = {
      type: 'rover',
      cords: initialRoverCords, 
      cardinalDir: initialCardinalDir
    }

    // Place rover at start cords
    this.gridController.placeItem(this.rover)

    obstacles.map(item => {
      this.gridController.placeItem(item)

    })

    this.state = {
      grid: this.gridController.getGrid,
      compass: RoverController.setCardinalDirection(initialCardinalDir,compassArray),
      currentStep: null
    }

  }
  
  componentDidMount() {
    // start sequencer
    // if (timerid) {
    //   clearTimeout(timerid);
    // }
    // this.sequencer.start(sequence);
    // this.step();
  }

  step = () => {
    this.setState({currentStep:this.sequencer.getStep });
    console.log(this.state.currentStep);

    this.timer = setTimeout(() => {
      this.sequencer.next();
      
      this.step();
    }, 1000);
  }
  
  render() {
    return (
      <div className="App">
        <PlanetGrid grid={this.state.grid}/>
      </div>
    );
  }
}

export default App;
