import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './redux/todosSlice';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTodo(newTask));
      setNewTask('');
    }
  };

  return (
    <>
     <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Añadir tarea"
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(removeTodo(index))}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
