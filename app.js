// DOM Elements
const inputHolder = document.querySelector("input-holder");
const toDoTitle = document.querySelector("#todo-title");
const toDoBtn = document.querySelector(".todo-create");
const toDoList = document.querySelector(".todo-list");

// Function to create the li element
function createListItem(val) {
  return `
    <li>
      <span>${val}</span>
      <button class="todo-delete">Delete</button>
    </li> 
  `;
}

// Adding item to the list
toDoBtn.addEventListener("click", (e) => {
  let title = toDoTitle.value;
  let DOM = createListItem(title);
  toDoList.insertAdjacentHTML("beforeend", DOM);
  toDoTitle.value = "";
});

// Deleting item from the list
toDoList.addEventListener("click", (e) => {
  if (e.originalTarget.classList[0]) {
    toDoList.removeChild(e.originalTarget.parentNode);
  }
});
