import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <Listing/>
            <Listing/>
            <Listing/>
          </div>
        </div>

      </div>
    </div>

    </div>
  );
}

export default App;
