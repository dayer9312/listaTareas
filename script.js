// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

/*const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};*/

(()=>{
    const btn = document.querySelector('[data-form-btn]')
    const createTask=(evento)=>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        //console.log(input.value); //muestra valor
        const value=input.value;
        const list=document.querySelector('[data-list]');
        const task=document.createElement('li'); //etiqueta para task
        task.classList.add('card'); //aniade una clase "card" para task
        input.value='';
        const taskContent=document.createElement('div')
        const titleTask=document.createElement('span')
        titleTask.classList.add('task') 
        titleTask.innerText=value;
        taskContent.appendChild(checkComplete())
        taskContent.appendChild(titleTask);//introduce el span dentro del div
        
        task.appendChild(taskContent); //introduce el  div dentro del li
        task.appendChild(deleteIcon())
        list.appendChild(task); //introdizco el li en el ul

        const deleteIcon=()=>{
            const i = document.createElement('i');
            i.classList.add('fas','fa-trash-alt','trashIcon','icon')
            i.addEventListener('click',deleteTask);
            return i;
        }
        
        const deleteTask =(evento)=>{
            const padre = evento.target.parentElement;
            padre.remove();
        }

    };
    btn.addEventListener('click',createTask); //para ejecutarse tras un evento
    
})();


setDate();