const { func } = require("prop-types")

// ********FUNCTION CURRYING************* way of writting function with multiple parameter
function calcVolume(a) {
    return function (b) { // closure
        return function (c) {
            return a * b * c
        }
    }
}

console.log(calcVolume(3)(3)(3));