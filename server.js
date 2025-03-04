/* 
consts
*/

const express = require("express");
const app = express();
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

//exercise #1
app.get("/greetings/:name", (req, res) => {
  res.send(`<h1>Hello ${req.params.name}!</h1>`);
});

//exercise#2
app.get("/roll/:num", (req, res) => {
  let myNumber = parseInt(req.params.num);
  if (!myNumber) {
    res.send("You must specify a number");
  } else {
    let randomInt = Math.floor(Math.random() * (myNumber + 1));
    res.send(`You rolled a ${randomInt}`);
  }
});

//exercise#3
app.get("/collectibles/:idx", (req, res) => {
  let myIdx = parseInt(req.params.idx);
  let item = collectibles[myIdx];
  if (item) {
    res.send(
      `So, you want the ${item.name}? For $${item.price}, it can be yours!`
    );
  } else {
    res.send("This item is not yet in stock. Check back soon!");
  }
});

//exercise#4

app.get("/shoes", (req, res) => {
  let minPrice = req.query["min-price"];
  let maxPrice = req.query["max-price"];
  let type = req.query.type;
  let shoeList = [];

  shoeList = shoes.filter((shoe) => {
    return (
      (!minPrice || shoe.price >= Number(minPrice)) &&
      (!maxPrice || shoe.price <= Number(maxPrice)) &&
      (!type || shoe.type === type)
    );
  });
  res.send(shoeList);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
