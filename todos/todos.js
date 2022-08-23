import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();


const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

displayTodos();

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(todoForm);
    const todo = data.get('todo');
    const response = await createTodo(todo);
    displayTodos();
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

   

async function displayTodos() {
    todosEl.innerHTML = '';
    const todosArr = await getTodos();
    // display the list of todos, 
          // call render function, pass in state and complete handler function!
          // append to .todos
    for (let todo of todosArr) {
        const newTodoEl = renderTodo(todo);
        todosEl.append(newTodoEl);
    }
}

// add page load function
    // fetch the todos and store in state
    // call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
