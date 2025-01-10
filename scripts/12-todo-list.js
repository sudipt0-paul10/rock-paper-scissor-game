const todoList=[{name:'make dinner',dueDate:'2022-12-22'}, {name:'wash dishes',dueDate:'2022-12-22'}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-todo-delete-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

   document.querySelectorAll('.js-todo-delete-button')
   .forEach((deleteButton,index)=>{     //using for loop as to traverse the list of items 
    deleteButton.addEventListener('click',()=>{
        console.log(index);
        todoList.splice(index,1);
        renderTodoList();
    });
   });

   
}


document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push(
        //name: name,
        //dueDate: dueDate;
        {name,dueDate});
    //this empties the input box as soon we are done with entering value 
    inputElement.value = '';

    renderTodoList();
}