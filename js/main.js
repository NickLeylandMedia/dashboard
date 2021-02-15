//Collapse tabs (resources.html):
function collapseCategory() {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}

//To-Do List:
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
};

todoItems.push(todo);
console.log(todoItems);
}

const form =document.querySelector('.js-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const input =document.querySelector('.js-todo-input');

  const text =input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value ='';
    input.focus();
  }
})