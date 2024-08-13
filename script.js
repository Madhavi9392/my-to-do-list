document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('delete-all-btn').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskText = document.getElementById('todo-input').value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Add event listener to delete the task
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Add click event to mark the task as completed
    li.appendChild(deleteBtn);
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Append the list item to the list
    document.getElementById('todo-list').appendChild(li);
    document.getElementById('todo-input').value = '';
}

function deleteAllTasks() {
    const todolist = document.getElementById('todo-list');
    todolist.innerHTML = '';
}
