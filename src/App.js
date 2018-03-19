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

const initialCardinalDir = 'n';

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
    this.sequencer.start(sequence);
    
    this.timer = setTimeout(() => {
      this.step();
    }, 2000);
  }

  step() {
    // getStep from sequencer
    let nextStep = this.sequencer.getStep;
    console.log(nextStep)

    if (nextStep) {
      // pass step and rover to controller to update rover coords
      let _rover = this.roverController.executeStep(nextStep, this.rover, gridDimensions);

      // pass last rover coords and new rover coords to place rover
      let _grid = this.gridController.updateRover(_rover, this.rover.coords, this.state.grid.slice());

        if (_grid) {
          this.rover = _rover;
          this.setState({grid: _grid})
    
          this.timer = setTimeout(() => {
            this.sequencer.next();
            this.step();
          }, 2000);
    
        } else {

          this.stop('Cell Already Occupied. Can not execute command. Sequence aborted')
        }

    } else {
      this.stop('Sequence Complete');
    }
    
  }

  stop = (msg) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    
    alert(msg);
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
