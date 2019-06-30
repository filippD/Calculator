import React from 'react';
// import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="main">
        <Display calculation="0"/>
        <ButtonPanel />
      </div>
    );
  }

}

export default App;
