import deleteIcon from "./components/deleteTask.js";
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
        const task = document.createElement('li');
        const taskContent=document.createElement('div');
        const dateInformartion = document.createElement('p');
        var dateHour = new Date();
        const dateInformartionText = dateNumber.textContent+' '+dateMonth.textContent+' '+dateHour.getHours()+':'+dateHour.getMinutes()+':'+dateHour.getUTCSeconds();
        task.classList.add('task', 'roundBorder');
        input.value='';
        task.innerText=value;
        dateInformartion.innerText = dateInformartionText;
        taskContent.appendChild(task)
        taskContent.appendChild(deleteIcon())
        task.appendChild(dateInformartion)
        list.appendChild(taskContent);

        const cheked=(e)=>{
            var j;
            if(j){
                task.classList.add('check');
                
            }
            else{
                task.classList.add('check');
            }
            !j;
            
        }
        task.addEventListener('click',cheked);

    };
    
    btn.addEventListener('click',createTask); 
    
    
})();


setDate();