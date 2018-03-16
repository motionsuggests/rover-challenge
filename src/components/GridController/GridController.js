class GridController {
    
    constructor(dimensions) {

        this.grid = this.createGrid(dimensions);
        
    }

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

    placeItem(item) {
        let {x,y} = item.cords;
        if ( ! this.grid[x][y] ) {
            this.grid[x][y] = item;
        } else {
            console.log('Cell Already Occupied ')
        }
        
        
    }

    get getGrid() {
        return this.grid;
    }

    
    
  }

export { GridController as default}
