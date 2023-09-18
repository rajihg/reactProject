const KEYS = {
    tasks: 'tasks',
    taskId: 'taskId',
}

const tasks = getAllTasks();

export function insertTask(data) {
    //let tasks = getAllTasks();
    data['id'] = generateTaskId();
    tasks.push(data);
    localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function updateTask(data) {
    //let tasks = getAllTasks();
    let index = tasks.findIndex(task => task.id == data.id);
    tasks[index] = { ...data };
    localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function generateTaskId() {
    if (localStorage.getItem(KEYS.taskId) == 0) {
        localStorage.setItem(KEYS.taskId, 0);
    }
    let id = parseInt(localStorage.getItem(KEYS.taskId));
    localStorage.setItem(KEYS.taskId, (++id).toString());

    return id;
}

export function deleteTask(data) {
    //let tasks = getAllTasks();
    let updateTasks = tasks.filter(task => task.id != data.id);
    localStorage.setItem('tasks', JSON.stringify(updateTasks));
    let id = parseInt(localStorage.getItem(KEYS.taskId));
    localStorage.setItem(KEYS.taskId, (--id).toString());
}

export function completeTask(data) {
    //let tasks = getAllTasks();
    let completedTask = tasks.find(task => task.id == data.id);
    completedTask.isCompleted = 1;
}

export function getAllTasks() {
    if (localStorage.getItem(KEYS.tasks) == null) {
        localStorage.setItem(KEYS.tasks, JSON.stringify([]));
    }
    let tasks = JSON.parse(localStorage.getItem(KEYS.tasks));

    return tasks;
}