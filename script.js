// Selectors
let todoInput = document.querySelector(".input");
let btn = document.querySelector("button");
let todoList = document.querySelector(".list");

//Event Handlers
btn.onclick = create;
todoList.onclick = deletecheck;

//Functions
function create(e) {
  if (todoInput.value != "") {
    e.preventDefault();

    let newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    let newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    let cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    
    todoList.appendChild(newDiv);
    todoInput.value = "";
  } else {
    alert("Input Field Can't Be Blank");
  }
}

function deletecheck(e) {
  let item = e.target;

  if (item.classList[0] === "delete-btn") {
    let parent = item.parentElement;
    parent.remove();
  }

  if (item.classList[0] === "cmplt-btn") {
    let parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}