const {getRandomInt} = require("../utils/random");
const {getRandomNull, getRandomCalories, getRandomCarbohydrates, getRandomFats, getRandomName, getRandomPic, getRandomProteins} = require("./dataModify");

let foodItems = [];

function createListOfFoodItems(){
    const length = getRandomInt(1, 15);
    for(let i = 0; i < length; i++){
        const name = getRandomName();
        const src = getRandomPic();
        const fats = +getRandomFats();
        const proteins = +getRandomProteins();
        const carbohydrates = +getRandomCarbohydrates();
        const calories = +getRandomCalories();
        foodItems.push({
            "name": name,
            "src": getRandomNull(src),
            "fats": getRandomNull(fats),
            "proteins": getRandomNull(proteins),
            "carbohydrates": getRandomNull(carbohydrates),
            "calories": getRandomNull(calories)
        });
    }
}

module.exports = {foodItems, createListOfFoodItems};

