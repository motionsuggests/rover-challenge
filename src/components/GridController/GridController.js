class GridController {

    createGrid(dimensions) {
        let i, grid = new Array(dimensions);

        for (i = 0; i < dimensions; i++) {
            grid[i] = this.fillRow(dimensions);
        }
        return grid;
    }

    fillRow(dimensions) {
        let i, row = new Array(dimensions);

        for (i = 0; i < dimensions; i++) {
            row[i] = false;
        }

        return row;
    }

    placeItem(item, grid) {
        let {x,y} = item.coords;
        if ( ! grid[y][x] ) {
            grid[y][x] = item;
        } else {
            console.log('Can Not Place Item Cell Already Occupied ')
        }
        return grid;
    }

    updateRover(rover, lastCoords, grid) {
        let _grid = grid.slice();
        
        // check if cell is occupied by obstacle
        let isOccupied = grid[rover.coords.y][rover.coords.x] && grid[rover.coords.y][rover.coords.x].type === 'obstacle' ;
        
        if (!isOccupied) {
            _grid[lastCoords.y][lastCoords.x] = false;    
            _grid[rover.coords.y][rover.coords.x] = rover;
            return _grid;
        }
        return false;
        

        
    }
    
  }

export { GridController as default}
