class RoverControler {
    
    constructor() {}
    
    // Used to set start cardinalDirection on app init
    setCardinalDirection (cardinalDirection, compassArr) {
        // takes cardinalDirection and compassArr of [n, e, s, w]
        // returns compassArr with cardinalDirection at index 0

        let _compassArr = compassArr.slice();

        while(_compassArr[0] !== cardinalDirection) {
            let cardinal = _compassArr.shift();    
            _compassArr.push(cardinal);
        }

        return _compassArr;
    }

    turnRover(direction, compassArr) {
        // takes direction and compassArr of [n, e, s, w]
        // return array shifted to with direction at compassArr[0]
        
        let _compassArr = compassArr.slice();
        
        if (direction === 'r'){
            let cardinal = _compassArr.shift();    
            _compassArr.push(cardinal);
        }

        if (direction === 'l'){
            let cardinal = _compassArr.pop();    
            _compassArr.unshift(cardinal);
        }

        return _compassArr
        
    }

    moveForward(compass, coords) {
        // takes compass and coords 
        // return new coords
        let _coords = {...coords};
        switch(compass[0]) {
            case 'n':
                _coords.y -= 1;
                break;
            case 'e':
                _coords.x = coords.x + 1;
                break;
            case 's':
                _coords.y = coords.y + 1;
                break;
            case 'w':
                _coords.x = coords.x - 1;   
                break;
        }

        return _coords;
    }

    moveBackward(direction, coords) {
        // takes compass and coords 
        // return new coords
        let _coords = {...coords};
        switch(direction) {
            case 'n':
                _coords.y = coords.y + 1;
                break;
            case 'e':
                _coords.x = coords.x - 1;
                break;
            case 's':
                _coords.y = coords.y - 1;
                break;
            case 'w':
                _coords.x = coords.x + 1;
                break;
        }

        return _coords;
    }

    transPortCoords(coords, gridDimensions) {
        // if new cords are greater than grid dimensions transport to new coords
        var _coords = {...coords};

        if ( _coords.x >= gridDimensions) {
            _coords.x = 0;
        }
        if (_coords.x < 0 ){
            _coords.x = gridDimensions-1;
        }
        if (_coords.y >= gridDimensions ) {
            _coords.y = 0;
        }
        if (_coords.y < 0 ){
            _coords.y = gridDimensions-1;
        }
        return _coords;
        
    }

    executeStep(step, rover, gridDimensions) {
        let _rover = {...rover};
        let direction = rover.compass[0];
        
        switch(step){
            case 'r':
                _rover.compass = this.turnRover(step, rover.compass);
                break;
            case 'l':
                _rover.compass = this.turnRover(step, rover.compass);
                break;
            case 'f':
                _rover.coords = this.moveForward(direction, rover.coords);
                break;
            case 'b':
                _rover.coords = this.moveBackward(direction, rover.coords);
                break;
        }

        _rover.coords = this.transPortCoords(_rover.coords, gridDimensions);
        
        return _rover;
        
      }
    
  }

export { RoverControler as default}
