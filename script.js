const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-lists");
const input = document.querySelector(".todo-input");
const controlBtns = document.querySelector(".control-buttons");

function addTodo() {
  const inputValue = input.value.trim();
  const newElement = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить задачу";

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

  newElement.classList.toggle("todo-list-correct-item");
  deleteBtn.classList.toggle("delete-question");
  newElement.textContent = inputValue;
  todoList.appendChild(newElement);
  newElement.appendChild(deleteBtn);
}

todoBtn.addEventListener("click", () => {
  addTodo();
});

document.querySelector(".todo-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

todoList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("todo-list-correct-item")) {
    target.classList.toggle("todo-list-complate");
  } else if (target.classList.contains("todo-list-complate")) {
    target.classList.toggle("todo-list-complate");
  }

  if (target.classList.contains("delete-question")) {
    target.parentNode.remove();
  }
});

controlBtns.addEventListener("click", (event) => {
  const target = event.target;
  const elements = todoList.querySelectorAll(".todo-list-correct-item");

  if (target.textContent === "Выбрать все задачи") {
    elements.forEach((element) => {
      if (element.tagName === "DIV") {
        if (!element.classList.contains("todo-list-complate")) {
          element.classList.toggle("todo-list-complate");
        }
      }
    });
  } else {
    elements.forEach((element) => {
      if (element.tagName === "DIV") {
        if (element.classList.contains("todo-list-complate")) {
          element.classList.toggle("todo-list-complate");
        }
      }
    });
  }
});
