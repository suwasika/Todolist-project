import React, { useState, useEffect } from 'react';
import './style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Load tasks from local storage when component mounts
  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      console.log('Saved tasks:', savedTasks);
      setTasks(savedTasks);
    } catch (error) {
      console.error('Error loading tasks from local storage:', error);
    }
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tasks saved to local storage:', tasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  }, [tasks]);

  // Load input value from local storage when component mounts
  useEffect(() => {
    try {
      const savedInputValue = localStorage.getItem('inputValue') || '';
      setInputValue(savedInputValue);
    } catch (error) {
      console.error('Error loading input value from local storage:', error);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    } else {
      alert('Please enter a task!');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleCompleteAllTasks = () => {
    const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
    setTasks(updatedTasks);
  };

  const handleDeleteCompletedTasks = () => {
    const filteredTasks = tasks.filter(task => !task.completed);
    setTasks(filteredTasks);
  };

  const handleEditTask = (id, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'active' && !task.completed));

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-list">
      <h2>My To-Do List</h2>
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleCompleteAllTasks}>Complete all tasks</button>
      <button onClick={handleDeleteCompletedTasks}>Delete Comp tasks</button>
      <div>
        <label>Filter tasks: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <p>Total tasks: {totalTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => handleEditTask(task.id, e.target.value)}
            />
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
