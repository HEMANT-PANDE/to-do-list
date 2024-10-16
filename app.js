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
      
    }

document.getElementById('newTask').addEventListener('click',function(e){
  e.preventDefault();
  addTask();
})