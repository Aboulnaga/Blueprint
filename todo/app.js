const x = [1, 2, 3, 4]

// selectors
const d = document
const submitNewTodo = d.querySelector(".submit-new-todo") // submit new todo button
const inbutNewTodo = d.querySelector(".input-new-todo")
const todoList = d.querySelector(".todo-list")
const felterSelect = d.querySelector(".felter")

// listeners
submitNewTodo.addEventListener("click", addNewTodoInTodoList)
todoList.addEventListener("click", deletedAndCompleted)
felterSelect.addEventListener("click", filter)

// functions
function addNewTodoInTodoList(e) {
  e.preventDefault()

  const inbutNewTodoValue = inbutNewTodo.value // bring value from inbut box

  // create new item div to todo list
  const createNewTodoDiv = d.createElement("div")
  createNewTodoDiv.classList.add("todo-items")
  todoList.appendChild(createNewTodoDiv)

  // create new li on the new div inside todo list
  const createNewLi = d.createElement("li")
  createNewLi.classList.add("item")
  createNewLi.innerText = inbutNewTodoValue
  createNewTodoDiv.appendChild(createNewLi)
  inbutNewTodo.value = ""

  // create new delete button inside new div in todo list
  const createNewDeleteButton = d.createElement("button")
  createNewDeleteButton.classList.add("delete-item")
  createNewDeleteButton.innerHTML = `<i class="fa-solid fa-trash-can-arrow-up"></i>`
  createNewTodoDiv.appendChild(createNewDeleteButton)

  // create new completed button inside new div in todo list
  const createNewCompletedButton = d.createElement("button")
  createNewCompletedButton.classList.add("completed-item")
  createNewCompletedButton.innerHTML = `<i class="fa-sharp fa-solid fa-calendar-check"></i>`
  createNewTodoDiv.appendChild(createNewCompletedButton)

  //console.log(inbutNewTodoValue);
}

// to delete or chek complete any item in to do list
function deletedAndCompleted(e) {
  const eTarget = e.target // here we know where our mouse click on the ul list
  const eTargetClass = eTarget.classList[0] // here we choose the target class

  if (eTargetClass === "delete-item") {
    eTarget.parentElement.classList.add("deleted")
    eTarget.parentElement.addEventListener("transitionend", function (e) {
      eTarget.parentElement.remove()
    })
    //eTarget.parentElement.remove();
  } else if (eTargetClass === "completed-item") {
    eTarget.parentElement.classList.toggle("completed")
  }
  //   console.log(e.target);
}

// to filters items in todo list completed/uncompleted/all

function filter(e) {
  //   console.log(e.target.value);
  const todoListChilds = todoList.children

  for (let i = 0; i < todoListChilds.length; i++) {
    const todoChild = todoListChilds[i]
    const todoChildClassList = todoListChilds[i].classList
    switch (e.target.value) {
      case "all":
        todoChild.style.display = "flex"
        break

      case "completed":
        if (todoChildClassList.contains("completed")) {
          todoChild.style.display = "flex"
        } else {
          todoChild.style.display = "none"
        }
        break

      case "uncompleted":
        if (!todoChildClassList.contains("completed")) {
          todoChild.style.display = "flex"
        } else {
          todoChild.style.display = "none"
        }
        break
    }
  }
}
