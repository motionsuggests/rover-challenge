import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rover from '../Rover/Rover';

import './PlanetGrid.css';

class PlanetGrid extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid">
                    <div className="cell"></div>
                    <div className="cell">
                        <Rover/>
                    </div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
            </div>
        );
    }
}

PlanetGrid.propTypes = {

};

export default PlanetGrid;