let tasks = [];

const addTask = () =>{
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.value.trim();

    if(text){
      tasks.push({text:text, completed:false});
      updateTasList();
    }
};

const updateTasList = () =>{
      const tasklist = document.getElementById('task-list')
      tasklist.innerHTML = ''
      
      tasks.forEach(task => {
        const listItem = `
        <div class="taskItem">
          <div class="task">
            <input typr = "checkbox" class="checkbox" />
            <p>Finish this project</p>
            </div>
            <div class="icons">
            <img src="./img/edit.png" />
            <img src="./img/bin.png" />
            </div>
          </div>
        `;
      });
    };

document.getElementById('newTask').addEventListener('click',function(e){
  e.preventDefault();
  addTask();
})