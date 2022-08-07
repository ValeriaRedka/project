let ul = document.getElementById("myList");
let newTask = document.getElementById("newTask");
let addBtn = document.getElementById("addBtn");
let li = document.querySelectorAll("li");
let pError = document.querySelector("#error");
let addTask = document.querySelector(".addTask");

function addDeleteBotton(x) {
  let deleteTask = document.createElement("input");
  deleteTask.id = "deleteTask";
  deleteTask.type = "button";
  deleteTask.className = "deleteTask";
  deleteTask.value = "x";
  x.appendChild(deleteTask);
  deleteTask.addEventListener("click", function (event) {

    let currentLi = event.target.closest("li");
  if (event.target.type == "button" && event.target.value == "x") {
    ul.removeChild(currentLi);
} 

});
}
for (let value of li) {
  addDeleteBotton(value);
}


ul.addEventListener("click", function (event) {
    let currentLi = event.target.closest("li");
    
  
    currentLi.classList.add('textDecoration');
    currentLi.classList.remove('hover');
    
    event.target.addEventListener('click', function() {

        currentLi.classList.add('nontextDecoration');
    })
});

addBtn.addEventListener("click", function () {
  if (newTask.value.trim().length < 3) {
    pError.innerHTML = "New task is required";
    newTask.style = "border: 2px solid red";
    addTask.appendChild(pError);
  } else {
    pError.innerHTML = " ";
    newTask.style = "border: none";
    let liInMyList = document.createElement("li");
    let pInLi = document.createElement("p");
    pInLi.innerHTML = newTask.value;
    pInLi.className = 'hover';

    liInMyList.appendChild(pInLi);
    addDeleteBotton(liInMyList);

    ul.appendChild(liInMyList);
    newTask.value = "";
  }
});



// currentLi.classList.add('textDecoration');
//         currentLi.style = 'background: gray';
//         event.target.style = 'background: gray';


