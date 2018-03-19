


module.exports.randomCoords = function randomCoords(range) {
    let x = Math.floor(Math.random() * Math.floor(range-1));
    let y = Math.floor(Math.random() * Math.floor(range-1));

    return {x: x, y: y};
}