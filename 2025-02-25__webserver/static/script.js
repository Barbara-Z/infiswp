const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const clearAllButton = document.getElementById('clearAll');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

clearAllButton.addEventListener('click', function() {
    taskList.innerHTML = '';
});