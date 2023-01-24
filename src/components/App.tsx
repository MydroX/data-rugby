import React from 'react';
import '../styles/App.css';
import 'semantic-ui-css/semantic.min.css'
import KickAnalyser from './KickAnalyser';
import Header from './Header';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <KickAnalyser />
      </div>
    );
    }
  }

export default App;
