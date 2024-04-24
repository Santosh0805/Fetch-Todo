document.addEventListener('DOMContentLoaded', () => {
    const todosContainer = document.getElementById('todosList');

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.classList.add('todo');
                todoElement.innerHTML = `
                    <h3>${todo.title}</h3>
                    <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
                `;
                todosContainer.appendChild(todoElement);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
});
