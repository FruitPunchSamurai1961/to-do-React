import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { list: [], value: '' };
  }
  onChange(e) {
    this.setState({
      value: e.target.value,
    })
  }
  onClick() {
    const state = this.state;
    state.list.push(this.state.value);
    state.value = ' '
    this.setState({
      state: state
    }
    )
  }
  render() {
    return (
      <div className="container" >
        <h1> To - Do Project </h1>
        <input value={this.state.value} onChange={(e) => this.onChange(e)} />
        <button onClick={() => this.onClick()}>add</button>
        <ul>
          {this.state.list.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      </div>
    );
  }
}
export default App;