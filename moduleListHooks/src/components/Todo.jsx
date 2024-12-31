import React, { useState } from 'react';
import './todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (input.trim() !== '') {
      if (isEditing) {
        const updatedTodos = todos.map((todo, index) =>
          index === currentTodo ? input : todo
        );
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentTodo(null);
      } else {
        setTodos([...todos, input]);
      }
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setIsEditing(true);
    setCurrentTodo(index);
  };

  const deleteList = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <h1>Grocery Shopping</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="text" value={todo} readOnly className="todo-text" />
            <button onClick={() => deleteTodo(index)} className="btn delete-btn">
              🗑️
            </button>
            <button onClick={() => editTodo(index)} className="btn edit-btn">
              ✏️
            </button>
          </li>
        ))}
      </ul>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add something to your list"
        />
        <button onClick={addTodo} className="btn add-btn">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>

      <button onClick={deleteList} className="btn delete-list-btn">
        Delete List
      </button>
    </div>
  );
}

export default Todo;
