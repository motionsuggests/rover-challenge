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
        if ( ! grid[x][y] ) {
            grid[x][y] = item;
        } else {
            console.log('Cell Already Occupied ')
        }
        return grid;
    }
    
  }

export { GridController as default}
