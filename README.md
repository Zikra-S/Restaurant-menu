# 🍽️ Ethiopian Menu JavaScript Practice

A simple JavaScript project that manages a restaurant menu and demonstrates useful JavaScript concepts using Ethiopian dishes.

## 📋 Menu

The menu includes:

- 🍗 Doro Wat — 180 birr — Spicy
- 🍝 Pasta — 120 birr — Mild
- 🥩 Kitfo — 200 birr — Spicy
- 🥗 Salad — 90 birr — Mild

## 🚀 What This Project Demonstrates

This project practices:

- JavaScript arrays and objects
- Object destructuring
- Arrow functions
- `.map()` for transforming menu items
- `.filter()` for finding spicy dishes
- `.reduce()` for calculating the total price
- Spread syntax (`...`) for adding a new dish
- Template literals
- Conditional statements
- Functions and boolean values

## 🧠 How It Works

### Formatting the Menu

Each dish is transformed into a readable string using `.map()`:

```js
const newMenu = menu.map(formatDish);

Example output:

DORO WAT — 180 birr — 🌶️ spicy
PASTA — 120 birr — mild
KITFO — 200 birr — 🌶️ spicy
SALAD — 90 birr — mild
Finding Spicy Dishes

The menu is filtered to find dishes where spicy is true:

let spicyDishes = menu.filter((item) => item.spicy === true);
Calculating the Total Price

The total cost of ordering one of everything is calculated using .reduce():

let totalPrice = menu.reduce((sum, item) => sum + item.price, 0);

If the total is greater than 500 birr, the program prints:

This is a feast!
Adding a New Dish

The spread operator is used to create a new menu with an additional dish:

let fullMenu = [
  ...menu,
  { dish: "tibs", price: 190, spicy: true }
];
💻 Running the Project

Clone the repository:

git clone https://github.com/Zikra-S/Restaurant-menu.git

Open the project folder:

cd Restaurant-menu

Run the JavaScript file with Node.js:

node Restaurant-menu.js
🎯 Purpose

This project was created as JavaScript practice while learning how to work with arrays, objects, functions, and modern JavaScript methods.

Small project, tasty data, and a little bit of JavaScript
