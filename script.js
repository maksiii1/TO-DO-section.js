const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-lists");
const input = document.querySelector(".todo-input");

function addTodo() {
  const inputValue = input.value.trim();
  const newElement = document.createElement("div");

  if (inputValue === "" || inputValue === null) {
    newElement.className = "todo-list-items";
    if (todoList.lastChild?.textContent !== "Вы ничего не ввели") {
      newElement.textContent = "Вы ничего не ввели";
      todoList.appendChild(newElement);
    }
    return;
  }

  if (
    todoList.lastChild?.textContent === "Вы ничего не ввели" ||
    todoList.firstChild?.textContent === "Вы ничего не ввели"
  ) {
    if (todoList.lastChild.textContent === "Вы ничего не ввели") {
      todoList.removeChild(todoList.lastChild);
    } else {
      todoList.removeChild(todoList.firstChild);
    }
  }

  newElement.className = "todo-list-correct-item";
  newElement.textContent = inputValue;
  todoList.appendChild(newElement);
}

todoBtn.addEventListener("click", () => {
  addTodo();
});

document.querySelector(".todo-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
