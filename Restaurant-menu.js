const menu = [
  { dish: "doro wat", price: 180, spicy: true },
  { dish: "pasta", price: 120, spicy: false },
  { dish: "kitfo", price: 200, spicy: true },
  { dish: "salad", price: 90, spicy: false },
];

function spicyLabel(spicy) {
  if (spicy) {
    return "🌶️ spicy";
  } else {
    return "mild";
  }
}

const formatDish = ({ dish, price, spicy }) => {
  const dishName = dish.toUpperCase();
  const test = spicyLabel(spicy);
  return `${dishName} — ${price} birr — ${test}`;
};

const newMenu = menu.map(formatDish);

for (let food of newMenu) {
  console.log(food);
}

let spicyDishes = menu.filter((item) => item.spicy === true);
console.log(`Spicy dishes: ${spicyDishes.length}`);

let totalPrice = menu.reduce((sum, item) => sum + item.price, 0);
console.log(`One of everything: ${totalPrice} birr`);

if (totalPrice > 500) {
  console.log("This is a feast!");
} else {
  console.log("A reasonable meal.");
}

let fullMenu = [...menu, { dish: "tibs", price: 190, spicy: true }];
console.log(`Menu now has ${fullMenu.length} dishes`);
