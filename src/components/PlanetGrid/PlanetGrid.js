import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rover from '../Rover/Rover';
import Obstacle from '../Obstacle/Obstacle';

import './PlanetGrid.css';

class PlanetGrid extends Component {
    
    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid">
                    {   // these are rows
                        this.props.grid.map(row =>{
                            // these are columns
                           return row.map( (cell, index) =>{
                                if ( cell && cell.type === 'rover') {
                                    return (
                                        <div className="cell" key={`key-${index}`} >
                                            <Rover cardnialDirection={cell.compass[0]}/>
                                        </div>
                                        )
                                }

                                if ( cell && cell.type === 'obstacle') {
                                    return (
                                        <div className="cell" key={`key-${index}`} >
                                            <Obstacle/>
                                        </div>
                                        )
                                }


                                return <div className="cell" key={`key-${index}`}></div>;

                                
                            })
                            
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

PlanetGrid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default PlanetGrid;