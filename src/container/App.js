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
  }


  render() {

    const handleClick = (btnName) => {
      const data = {
        calculation: this.state.calculation,
        total: this.state.total,
        current: this.state.current,
        operator: this.state.operator
      }
      const newData = calculate(data, btnName);
      this.setState({
        calculation: newData.calculation,
        total: newData.total,
        current: newData.current,
        operator: newData.operator
      })
    }

    return (
      <div id="main" className="calculator">
        <Display calculation={this.state.calculation}/>
        <ButtonPanel handleClick={handleClick}/>
      </div>
    );
  }

}

export default App;
