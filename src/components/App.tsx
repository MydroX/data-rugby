import React from 'react';
import '../styles/App.css';
import { Pitch } from './Pitch';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pitch />
      </div>
    );
  }
}

export default App;
