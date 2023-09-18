document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const addBtn = document.getElementById('add');
    const table = document.getElementById('table');
    const alert = document.getElementById('alertAdd');
    const rows = new Array();
    let id = 0;

    function removeTodo(id){
        document.getElementById(id).remove();
    }

    function addTodo(){
        if(title.value !== '' || description.value !== ''){
            alert.classList.add('d-none');
            const row = table.insertRow();
            row.setAttribute('id', id++);
            row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
            <input type="checkbox">
            </td>
            <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>
                       
            </td>
            `;
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn' , 'btn-danger' , 'mb-1' , 'ml-1');
            removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
            removeBtn.onclick = () => { 
                removeTodo(row.getAttribute('id'));
            }
            row.children[3].appendChild(removeBtn);
            rows.push(row);
        }
        else{
            alert.innerText = "Se requiere un titulo y una descripcion"; 
            alert.classList.remove('d-none');
        }
        console.log(rows);

    }

    addBtn.onclick = addTodo;
    
});