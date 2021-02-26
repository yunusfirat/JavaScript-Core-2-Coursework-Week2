function todoList(todos) {
  // Write your code here...
  let content = document.querySelector('#content');
  todos.forEach(todo => {
    let ultag = document.createElement('ul');
    let litag = document.createElement('li');
    litag.style.listStyle = "none";
    litag.style.textDecoration = "line-through"
    content.appendChild(ultag).appendChild(litag);
    litag.innerHTML = todo.todo;
    
  })
  const listItem =document.querySelectorAll("li");
  console.log(listItem);
    listItem.forEach(list => {
      list.addEventListener("click", () => {
        if(list.style.textDecoration === "line-through"){
          list.style.textDecoration = "none"
        }else{
          list.style.textDecoration = "line-through"
        }
    });
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);