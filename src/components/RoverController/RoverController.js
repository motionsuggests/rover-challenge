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
                _coords.y = _coords.y - 1;
            case 'e':
                _coords.x = _coords.x + 1;
            case 's':
                _coords.y = _coords.y + 1;
            case 'w':
                _coords.x = _coords.x - 1;   
        }

        return _coords;
    }

    moveBackward(compass, coords) {
        // takes compass and coords 
        // return new coords
        let _coords = {...coords};
        switch(compass[0]) {
            case 'n':
                _coords.y = _coords.y + 1;
            case 'e':
                _coords.x = _coords.x - 1;
            case 's':
                _coords.y = _coords.y - 1;
            case 'w':
                _coords.x = _coords.x + 1;   
        }

        return _coords;
    }

    executeStep(step, rover) {
        let _rover = { ...rover };
        
        switch(step){
            case 'r':
                _rover.compass = this.turnRover(step, _rover.compass);
            case 'l':
                _rover.compass = this.turnRover(step, _rover.compass);
            case 'f':
                _rover.coords = this.moveForward(_rover.compass, _rover.coords);
            case 'b':
                _rover.coords = this.moveBackward(_rover.compass, _rover.coords);
        }
        
        return _rover;
        
      }
    
  }

export { RoverControler as default}
