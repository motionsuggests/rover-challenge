


module.exports.randomCoords = function randomCoords(range) {
    let x = Math.floor(Math.random() * Math.floor(range));
    let y = Math.floor(Math.random() * Math.floor(range));

    return {x: x, y: y};
}