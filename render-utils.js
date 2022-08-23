import { completeTodo } from './fetch-utils.js';

export function renderTodo(newTodo) {
    // create a div and a p tag
    const todoEl = document.createElement('div');
    const todoText = document.createElement('p');


    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (!newTodo.complete) {
        todoEl.addEventListener('click', async () => {
            await completeTodo(newTodo.id);
            todoEl.classList.add('complete');

        });
        todoEl.classList.add('incomplete');

    } else {
        todoEl.classList.add('complete');
    }
    // add the 'todo' css class no matter what
    todoEl.classList.add('todo');
    // put the todo's text into the p tag
    todoText.textContent = newTodo.todo;
    // append stuff
    todoEl.append(todoText);
    // add event listener for click and call handleComplete function
    
    // return the div
    return todoEl;
}
