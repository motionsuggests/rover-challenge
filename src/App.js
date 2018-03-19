import React, { Component } from 'react';

import {randomCoords} from './Utils';

import GridController from './components/GridController/GridController';
import Sequencer from './components/Sequencer/Sequencer';
import RoverController from './components/RoverController/RoverController';
import PlanetGrid from './components/PlanetGrid/PlanetGrid';

import './App.css';

const gridDimensions = 4;

const sequence = ['l', 'f', 'l', 'f', 'f', 'f', 'f', 'r', 'b', 'b', 'b'];

const initialRoverCoords = {x: 1, y: 1};

const initialCardinalDir = 's';

const compassArr = ['n', 'e', 's', 'w'];

const obstacles = [
  { coords: randomCoords(gridDimensions), type: 'obstacle'},
  { coords: randomCoords(gridDimensions), type: 'obstacle'},
]




class App extends Component {

  constructor() {
    super();
    
    this.gridController = new GridController();
    this.roverController = new RoverController();
    this.sequencer = new Sequencer();
    this.timer = null;

    let compass = this.roverController.setCardinalDirection(initialCardinalDir, compassArr);
    let grid = this.gridController.createGrid(gridDimensions);

    this.rover = {
      type: 'rover',
      coords: initialRoverCoords,
      compass:  compass
    }

    // Place rover at start cords
    grid = this.gridController.placeItem(this.rover, grid);
    
    // Place Obstacles
    obstacles.map(item => {
      grid = this.gridController.placeItem(item, grid);
      return null;
    })

    this.state = {
      grid: grid
    }

  }
  
  componentDidMount() {
    // start sequencer
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.sequencer.start(sequence);
    // this.step();
  }

  step() {
    let nextStep = this.sequencer.getStep;
    console.log(nextStep);
    // getStep from sequencer
    
    // pass step and rover to controller
    let _rover = this.roverController.executeStep(nextStep, this.rover);
    
    let _grid = this.gridController.placeItem(_rover, this.state.grid);

    this.rover = {..._rover};

    this.setState({grid: _grid})
    
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
