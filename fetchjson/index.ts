import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Interfaces in TypeScript are used to define the structure of an object
interface Todo {
    // label the type of data that each of properties reference
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};
