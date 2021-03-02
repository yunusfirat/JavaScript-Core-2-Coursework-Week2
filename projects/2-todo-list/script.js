function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  const changeBtn = document.querySelectorAll(".fa-check");
  const deleteBtn = document.querySelectorAll(".fa-trash");
  changeBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget.parentElement.parentElement;
      element.classList.toggle("line-through")
    })
  })

  deleteBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget.parentElement.parentElement;
      element.remove();
    })
  })



}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  let input = document.querySelector("#todoInput");
  let addBtn = document.querySelector("button");
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  if(input.value) {
    let obj = {};
    obj.task = input.value;
    obj.completed= false;
    todos.unshift(obj);

    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${input.value}
    <span class="badge bg-primary rounded-pill">
    <i id="change-btn" class="fa fa-check" aria-hidden="true"></i>
    <i id="delete-btn" class="fa fa-trash" aria-hidden="true"></i>
    </span></li>`

    input.value = "";
  }  
  populateTodoList(todos);

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
