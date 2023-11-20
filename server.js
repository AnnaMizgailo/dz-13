const express = require("express");
const path = require("path");
const {foodItems, createListOfFoodItems} = require("./data/data");

createListOfFoodItems();

const app = express();
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) =>{
    console.log(foodItems);
    res.render("info.hbs", foodItems);
});

app.use((_, res) =>{
    res.status(404).send("<h1>Ничегошеньки...</h1>")
})

app.listen(3000, () =>{
    console.log("порт 3000");
})