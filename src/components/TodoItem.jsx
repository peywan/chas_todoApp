// Importera React
import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    return (
        <li>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={() => updateTodo(todo.id, !todo.done)}>
                {todo.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
