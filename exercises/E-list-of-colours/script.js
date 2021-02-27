function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector('#content');
  let pElement = document.createElement('p');
  let selectElement = document.createElement('select');
  content.appendChild(selectElement);
  content.appendChild(pElement);
   colours.forEach(colour => {
    selectElement.innerHTML += `<option>${colour}</option>`
  });

  selectElement.addEventListener("change", (e)=> {
    pElement.innerHTML = `you have selected: ${e.target.value}`
    pElement.style.backgroundColor = e.target.value;
  })
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
