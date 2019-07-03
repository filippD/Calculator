import React from 'react';
import './App.css';
import Display from '../components/Display/Display';
import ButtonPanel from '../components/ButtonPanel/ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calculation: '0',
      total: '',
      current: '',
      operator: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (btnName) {
    const data = {
      calculation: this.state.calculation,
      total: this.state.total,
      current: this.state.current,
      operator: this.state.operator
    }
    const newData = calculate(data, btnName);
    const { calculation, total, current, operator } = newData;
    this.setState({ calculation, total, current, operator })
  }

  render() {
    return (
      <div id="main" className="calculator">
        <Display calculation={this.state.calculation}/>
        <ButtonPanel handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default App;
