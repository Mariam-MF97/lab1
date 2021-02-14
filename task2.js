const restaurant = {
  name: "ES-Snacks",
  drinks: {
    hot: ["coffee", "tea"],
    cold: ["pepsi", "7up", "fanta", "juice"],
  },
  meals: ["burger", "pizza"],

  addOrder(obj) {
    let myDrink;
    let {
      name: clientName,
      order: { meal, drink: drink },
    } = obj;

    let key = Object.keys(drink)[0];
    let value = Object.values(drink)[0];
    meal = this.meals[meal - 1];
    if (key == "c") {
      myDrink = this.drinks.cold[value];
    } else if (key == "h") {
      myDrink = this.drinks.hot[value];
    }

    const myMessage = `Thank you for ordering from ES-Snacks
Order Summary
=============
Mr/Ms:" ${clientName}"
Order: " ${meal}"," ${myDrink}"
  
have a great day`;

    return myMessage;
  },
};
const arr = restaurant.drinks.cold;
const {
  name,
  drinks: {
    hot,
    cold: coldDrinks },
  meals,
} = restaurant;

function returnLetterU(coldDrinks) {
  const drinksWithU = [];
  for (let i = 0; i < coldDrinks.length; i++) {
    if (coldDrinks[i].includes("u")) {
      drinksWithU.push(coldDrinks[i]);
    }
  }
  return drinksWithU;
}

let myOrd = {
  name: "Shehab",
  order: {
    meal: 1,
    drink: { c: 0 },
  },
};

const handler = {
  set(target, property, value) {
    if (property === "meal") {
      if (typeof value !== "number") {
        throw new Error("meal should be a number");
      }
      if (value >= 2) {
        throw new Error("meal should be less than 2");
      }
    } else if (property === "order") {
      if (typeof value !== "object") {
        throw new Error("This should be an object");
      }
    } else if (property === "oppa") {
      throw new Error("You cannot add a property oppa");
    }
    target[property] = value;
  },
};

const myProxy = new Proxy(myOrd, { handler });

console.log(restaurant.addOrder(myOrd));
