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
		})
	}

	updateInputValue(event) {
		event.preventDefault();
		this.setState({
      inputValue: event.target.value
    });
	}

	deleteTask(i) {
		const newTasks = [...this.state.tasks];
		newTasks.splice(i, 1);
		this.setState({
			tasks: newTasks,
		});
	}

	openEditMode(i) {
		const newTasks = [...this.state.tasks];
		// console.log(newTasks[i])
		newTasks[i].text += '+++' ;
		this.setState({
			tasks: newTasks,
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
					deleteTask={ (i) => this.deleteTask(i) }
					openEditMode={ (i) => this.openEditMode(i) }
				/>
			</div>
		)
	}
}

export default App;