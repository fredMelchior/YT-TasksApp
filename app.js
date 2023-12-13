function addTask() {
    document.getElementById("task_form").addEventListener(
        'submit', function (e) {
            e.preventDefault()
        }
    )

    const taskTitleInput = document.getElementById("task_title")
    const taskImageInput = document.getElementById("task_image")
    const taskSelectPriority = document.getElementById("priority")
    const taskDescInput = document.getElementById("task_description")

    const taskList = document.getElementById("task-list")

    const taskCard = document.createElement("div")
    taskCard.className = "card"

    taskCard.innerHTML = `
    <img src="${taskImageInput.value}" alt="">
    <h3 class="card-title">${taskTitleInput.value}</h3>
    <span class="${taskSelectPriority.value}"><p>${taskSelectPriority.value}</p></span>
    <p class="card-desc">
        ${taskDescInput.value}
    </p>
    <div class="card-buttons">
        <button class="done" id="done" onclick="completeTask(this)">Done</button>
        <button class="delete" id="delete" onclick="deleteTask(this)">Delete</button>
    </div>
    `

    taskList.appendChild(taskCard)
}

function completeTask(button) {
    const task = button.parentNode.parentNode
    const doneTasks = document.getElementById("done-list")

    task.classList.add("complete")

    button.parentNode.removeChild(button)
    doneTasks.appendChild(task)
}

function deleteTask(button) {
    const task = button.parentNode.parentNode

    task.parentNode.removeChild(task)
}