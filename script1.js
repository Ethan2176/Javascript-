let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        displayTasks();
    }
});

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';

        const taskHeader = document.createElement('h2');
        taskHeader.innerHTML = `
            <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})" />
            <label for="task${index}">${task.text}</label>
        `;
        
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        };

        // Hide the remove button if the task is completed
        if (task.completed) {
            removeButton.style.display = 'none';
        }

        taskElement.appendChild(taskHeader);
        taskElement.appendChild(removeButton);
        taskList.appendChild(taskElement);
    });
}

function toggleTask(index) {
    // Toggle the completed status of the task
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to reset local storage
// Add event listener for the reset button
document.getElementById('resetButton').addEventListener('click', function() {
    if (confirm("Are you sure you want to reset all tasks? This action cannot be undone.")) {
        tasks = []; // Clear the tasks array
        localStorage.removeItem('tasks'); // Clear local storage
        displayTasks(); // Refresh the task display to show no tasks
    }
});

// Initial display of tasks
displayTasks();