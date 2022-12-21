const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

let j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j])
  j++;
}

for (let k = 1; k <= ingredients.length; k++){
  console.log(ingredients[ingredients.length - k])
}