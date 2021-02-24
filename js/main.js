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

//Daily Tasks
var sundayTask = []
var mondayTask = []
var tuesdayTask = []
var wednesdayTask = []
var thursdayTask = []
var fridayTask = []
var saturdayTask = []


function render() {
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
  document.getElementById('sundayItemText') = sundayTask
}


