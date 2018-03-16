import React, { Component } from 'react';

import './Rover.css';

const rotation = {
    n: '0deg',
    e: '90deg',
    s: '180deg',
    w: '-90deg'
} 

class Rover extends Component {

    render() {
        const style = {transform: `rotate( ${rotation[this.props.cardnialDirection]})`}
        return (
            <div className="rover" style={style}/>
        );
    }
}

export default Rover;