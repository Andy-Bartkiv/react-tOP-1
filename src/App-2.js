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
			time: new Date().toLocaleTimeString(),
		}
  }

	getTime() {
		return new Date().toLocaleTimeString()
	}

	tick() {
		this.setState({
			time: this.getTime(), 
		})
	}

	handleClick() {
		this.tick();
		const newTask = {time: this.state.time, text: this.state.inputValue};
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
				<Overview tasks={this.state.tasks}/>
			</div>
		)
	}
}

export default App;