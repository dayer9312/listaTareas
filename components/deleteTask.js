const deleteIcon=()=>{
    const i = document.createElement('buttom');
    i.classList.add('orderButton','roundBorder');
    i.innerText="Eliminar"
    i.addEventListener('click',deleteTask);

    return i;
}

const deleteTask =(evento)=>{
    const padre = evento.target.parentElement;
    padre.remove();
}

export default deleteIcon;