const field = document.getElementById("input");
const button = document.getElementById("add");
const close = document.querySelectorAll(".fa-xmark");
let circle = document.querySelectorAll(".empty");
let taskLine = document.querySelectorAll(".task-line");
let taskText = document.querySelectorAll(".p-text");
let taskContainer = document.querySelector(".tasks");

// 2nd - new version

button.addEventListener("click", function addTaskDiv(){
    if(field.value === ''){
        alert("Enter your task: ");
    } else{
        let div = document.createElement("div");
        div.className = "task-line";
        div.style.display = "flex";

        div.innerHTML = `
            <img src = "images/unchecked.png" class = "empty">
            <p class = "p-text">${field.value}</p>
            <i class = "fa-solid fa-xmark"></i>
        `;

        taskContainer.appendChild(div);
    }

    field.value = "";
});

taskContainer.addEventListener("click", function changeIcon(e){
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    } else if(e.target.tagName === "IMG"){
        e.target.src = "images/checked.png";
    } 
});


// 1st - old version

// let index = 0;
// button.addEventListener("click", function addTask(){
//     taskText[index].textContent = field.value;
//     taskLine[index].style.display = "flex";
//     index++;
//     field.value = "";
// });

// let index2 = 0;
// close.addEventListener("click", function removeTask(){
//     taskLine[index2].style.display = "none";
//     index2++;
// }); 