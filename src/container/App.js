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
      operator: '',
      shouldReset: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick = (btnName) => {
  //   this.setState(prevState => calculate(prevState, btnName)
  // }
  handleClick (btnName) {
    this.setState(prevState => calculate(prevState, btnName))
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
