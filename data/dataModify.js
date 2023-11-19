const {getRandomElement, getRandomInt} = require("../utils/random");

const names = ["Десерт горячий Брауни", "Картофель Деревенский", "Десерт мороженое Рожок", "Картофель Кинг Фри", "Десерт мороженое Рожок",  "Картофель Кинг Фри",
"Напиток 7UP", "Напиток Mirinda", "Напиток Pepsi", "Напиток кофе Капучино",  "Напиток кофе Латте", "Салат Микс", "Снеки Кинг Наггетс", "Снеки Крылышки Кинг", "Снеки Луковые колечки"]

const src = ["hot-brownie-burger-king.jpg", "country-potatoes-burger-king.jpg", "ice-cone-burger-king.jpg", "7up-burger-king.jpg", "potato-king-fries-burger-king.jpg", "7up-burger-king.jpg",
"mirinda-burger-king.jpg", "pepsi-burger-king.jpg", "coffee-cappuccino-burger-king.jpg", "coffee-latte-burger-king.jpg", "salad-mix-burger-king.jpg", "king-nuggets.jpg", "chicken-wings-king.jpg", "onion-rings-burger-king.jpg" ]

function getRandomName(){
    return getRandomElement(names);
}

function getRandomPic(){
    return getRandomElement(src);
}
function getRandomCalories(){
    return getRandomInt(50, 500);
}
function getRandomProteins(){
    return getRandomInt(0, 40) + "." + getRandomInt(0, 9);
}
function getRandomFats(){
    return getRandomInt(0, 60) + "." + getRandomInt(0, 9);
}
function getRandomCarbohydrates(){
    return getRandomInt(0, 150) + "." + getRandomInt(0, 9);
}
function getRandomNull(func){
    let ans = getRandomInt(0,1);
    if(ans){
        return "-";
    }
    return func;
}
module.exports = {getRandomName, getRandomPic, getRandomCalories, getRandomFats, getRandomCarbohydrates, getRandomProteins, getRandomNull};