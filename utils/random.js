function getRandomInt(min, max){
    return Math.floor(min + Math.random() * (max - min + 1));
}
function getRandomElement(array){
    return array[getRandomInt(0, array.length-1)];
}
module.exports = {getRandomInt, getRandomElement};