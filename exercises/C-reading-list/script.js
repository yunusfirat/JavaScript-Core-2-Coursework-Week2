function readingList(books) {
  // Write your code here...
  const content = document.querySelector('#content')
  books.forEach(book => {
    // creating element
    let ultag = document.createElement('ul');
    let litag = document.createElement('li');
    ultag.style.display = "flex"
    ultag.style.alignItems = "center"
    ultag.style.justifyContent = "center"
    ultag.style.padding = "20px"
    litag.style.objectFit = "cover"
    content.style.display = "flex"
    litag.style.listStyle = "none"
    if (book.alreadyRead) {
      litag.style.backgroundColor = "green";
    } else {
      litag.style.backgroundColor = "red";
    }
    let ptag = document.createElement('p');
    let image = document.createElement('img')
    image.style.marginTop = "40px"
    image.style.height = "50%"
    image.style.marginLeft = "20px"
    image.src = book.image
    ptag.innerHTML = `${book.title}-${book.author}`
    content.appendChild(ultag).appendChild(litag).appendChild(ptag).appendChild(image);

  });
}
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image: "https://images.penguinrandomhouse.com/cover/9780307476708"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"
  }
];

readingList(books);