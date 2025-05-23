const inputValue = document.querySelector(".todo-input").value;
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-lists");
let checker = false;

todoBtn.addEventListener("click", () => {
  if ((inputValue === "" || inputValue === null) && checker === false) {
    const todo = document.querySelector(".todo-container");
    const newElement = document.createElement("div");
    newElement.className = "todo-list-items";
    newElement.textContent = "Вы ничего не ввели";
    todo.appendChild(newElement);
    checker = true;
    return;
  }
});
