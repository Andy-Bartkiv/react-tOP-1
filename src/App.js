import React from 'react';
import Clock from './clock';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  resetCount() {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={ () => this.countUp() }>
          Click Me!
        </button>
        <p>{ this.state.count }</p>
        <button onClick={ () => this.resetCount() }>
          Reset
        </button>
        <Clock />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       HELLO
//     </div>
//   );
// }

export default App;
