class RoverControler {
    
    constructor() {}
    
    // Used to set start cardinalDirection on app init
    static setCardinalDirection (cardinalDirection, compassArr) {
        // takes cardinalDirection and compassArr of [n, e, s, w]
        // returns compassArr with cardinalDirection at index 0
    }

    static turnRover(direction, compassArr) {
      // takes direction and compassArr of [n, e, s, w]
      // return array shifted to new direction
    }

    static moveForward(cardinalDirection, roverPosition) {
        // takes cardinalDirection and roverPosition 
        // return array return new position
    }

    static moveBackward(cardinalDirection, roverPosition) {
        // takes cardinalDirection and roverPosition 
        // return array return new position
    }
    
  }

export { RoverControler as default}
