function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector('#content')
  arrayOfPeople.forEach(item => {
    let ultag = document.createElement('ul');
    let litag = document.createElement('li');
    litag.innerHTML = `${item}`
    ultag.appendChild(litag);
    content.appendChild(ultag);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
