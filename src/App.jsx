// Importera det jag behöver
import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem.jsx';

// Funktioner
function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Funktion för att hantera inputfältet
    const handleInputChange = (input) => {
        setNewTodo(input.target.value);
    };

    // Funktion för att lägga till nya todos
    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), title: newTodo, done: false }]);
            setNewTodo('');
        }
    };

    // Funktion för att uppdatera todo
    const updateTodo = (id, done) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: done } : todo
        ));
    };

    // Funktion för att ta bort todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h1>Todo app by Peywan</h1>
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    );
}

export default App;
