import React, { useState } from 'react';
import Clock from './components/clock-hooks';
import Overview from './components/Overview'
import './App.css';


function App() {

	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState([]);
	const [editIndex, setEditIndex] = useState(-1);
	const [editText, setEditText] = useState('');

	function handleClick() {
		const newTask = {time: new Date().toLocaleTimeString(), text: inputValue};
		setTasks([...tasks, newTask]);
		setInputValue('');
		setEditIndex(-1);
		setEditText('');
	};

	function updateInputValue(event) {
		// event.preventDefault();
		setInputValue(event.target.value);
		setEditIndex(-1);
	};

	function deleteTask(i) {
		const newTasks = [...tasks];
		newTasks.splice(i, 1);
		setTasks(newTasks);
		setEditIndex(-1);
	};

	function openEditMode(i) {
		setEditIndex(i);
		setEditText(tasks[i].text);
	};

	function updateTaskText(event) {
		setEditText(event.target.value);
	};

	function closeEditMode(i) {
		const newTasks = [...tasks];
		newTasks[i].text = editText;
		setTasks(newTasks);
		setEditIndex(-1);
		setEditText('');
	};

	return (
		<div className="App">
			<div>APP-2 with Hooks</div>
			<Clock />
			<input
				value={ inputValue }
				placeholder='Enter New Task'
				onChange={ (event) => updateInputValue(event) }
			/>
			<button onClick={ () => handleClick() }> Add Task </button>
			<Overview 
				tasks = { tasks }
				editIndex = { editIndex }
				editText = { editText }
				deleteTask = { (item) => deleteTask(item) }
				openEditMode = { (i) => openEditMode(i) }
				updateTaskText = { (event) => updateTaskText(event) }
				closeEditMode = { (i) => closeEditMode(i) }
			/>
		</div>
	)
}

export default App;