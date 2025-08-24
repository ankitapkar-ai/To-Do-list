const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("task-btn");
const taskList = document.getElementById("task-list");

document.querySelector(".input").addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
});


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // ignore empty input


    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeBtn.className = "complete";
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
    });
 
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.className = "edit";
    editBtn.addEventListener("click", () => {
        editTask(span);
    });
 
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(span) {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}
