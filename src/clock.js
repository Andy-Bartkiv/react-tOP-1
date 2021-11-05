import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
				date: new Date(),
		}
	}

	render() {
		return (
			<h3>
				{ this.state.date.toLocaleTimeString() }
			</h3>
		)
	}
}

export default Clock;