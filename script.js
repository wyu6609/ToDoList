
//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//EventListeners

todoButton.addEventListener('click', addToList);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions

function addToList(event){
    console.log("clicked");

    //Prevent form from submitting
    event.preventDefault();

    //ToDo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    
    todoDiv.appendChild(newTodo);
    //add todo to local storage
    
    //completed button
    const completedButton= document.createElement("button");
    completedButton.innerHTML ='<i class= "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton= document.createElement("button");
    deleteButton.innerHTML ='<i class= "fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append to LIST
    todoList.appendChild(todoDiv);
    //clear todo input value;
    todoInput.value = "";
} 

function deleteCheck(e){
    const item = e.target;
    console.log(e.target);  
    //delete todo
    if (item.classList[0]==="delete-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();}
        )
        
        
    }
  
    
    // check mark
    if (item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display= "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display ="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display ="none";
                }
                break;
        }
    });
}


