function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector('#content')
  arrayOfPeople.forEach(person => {
    let ultag = document.createElement('ul');
    let litag = document.createElement('li');
    let ptag = document.createElement('p');
    ptag.innerHTML = person;
    let ullitag = ultag.appendChild(litag);
    content.appendChild(ullitag);
    console.log(person);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
