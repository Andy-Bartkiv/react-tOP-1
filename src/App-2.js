import React from 'react';
import Clock from './components/clock';
import Overview from './components/Overview'
import './App.css';

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			inputValue: '',
			tasks: [],
			editIndex: -1,
			editText: '',
		}
  }

	getTime() {
		return new Date().toLocaleTimeString()
	}

	handleClick() {
		const newTask = {time: this.getTime(), text: this.state.inputValue};
		this.setState({
			inputValue: '',
			tasks: this.state.tasks.concat(newTask),
			editIndex: -1,
			editText: '',
		})
	}

	updateInputValue(event) {
		// event.preventDefault();
		this.setState({
      inputValue: event.target.value,
			editIndex: -1,
    });
	}

	deleteTask(i) {
		const newTasks = [...this.state.tasks];
		newTasks.splice(i, 1);
		this.setState({
			tasks: newTasks,
			editIndex: -1,
		});
	}

	openEditMode(i) {
		const taskText = this.state.tasks[i].text;
		this.setState({
			editIndex: i,
			editText: taskText,
		});
	}

	updateTaskText(event) {
		this.setState({
      editText: event.target.value,
    });
	}

	closeEditMode(i) {
		const newTasks = [...this.state.tasks];
		newTasks[i].text = this.state.editText;
		this.setState({
			tasks: newTasks,
			editIndex: -1,
			editText: '',
		});
	}

	render() {
		return (
			<div className="App">
				<div>APP-2</div>
				<Clock />
				<input
					value={ this.state.inputValue }
					placeholder='Enter New Task'
					onChange={ (event) => this.updateInputValue(event)}
				/>
				<button onClick={() => this.handleClick()}>
					Add Task
				</button>
				<Overview 
					tasks={this.state.tasks}
					editIndex={this.state.editIndex}
					editText={this.state.editText}
					deleteTask={ (i) => this.deleteTask(i) }
					openEditMode={ (i) => this.openEditMode(i) }
					updateTaskText={ (event) => this.updateTaskText(event) }
					closeEditMode={ (i) => this.closeEditMode(i) }
				/>
			</div>
		)
	}
}

export default App;