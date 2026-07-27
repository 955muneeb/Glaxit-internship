// Application State Array
let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskListContainer = document.getElementById('taskList');

// Render Function: Maps the array state to DOM nodes
function renderTasks() {
    taskListContainer.innerHTML = ''; // Clear container

    tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';
        
        // Pass the item ID to data attributes so the event delegation listener can read it
        taskDiv.innerHTML = `
            <span class="task-text ${task.completed ? 'done' : ''}" data-id="${task.id}">
                ${task.text}
            </span>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
        
        taskListContainer.appendChild(taskDiv);
    });
}

// Add Task Handler
function handleAddTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const newTask = {
        id: Date.now().toString(), // Simple unique ID identifier
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

// Event Listeners
addTaskBtn.addEventListener('click', handleAddTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask();
});

// Event Delegation: One event listener on parent container to handle mutations
taskListContainer.addEventListener('click', (e) => {
    const target = e.target;
    const id = target.getAttribute('data-id');

    if (!id) return;

    if (target.classList.contains('task-text')) {
        // Toggle complete state in array
        tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    } else if (target.classList.contains('delete-btn')) {
        // Filter item out of the array
        tasks = tasks.filter(task => task.id !== id);
    }

    // Synchronize UI with updated data array
    renderTasks();
});