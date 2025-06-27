const forms = document.getElementById("forms");
const addButton = document.getElementById("addButton");
const tasks = document.getElementById("tasks");
const taskInput = document.getElementById("taskInput");

function add(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');
    
    taskText.textContent = task;
    checkbox.type = "checkbox";
    deleteButton.textContent = "Delete";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    tasks.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        if(checkbox.checked){
            listItem.remove();
        }
    });
    
}

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task) {
        add(task);
        input.value = "";
    }
});
