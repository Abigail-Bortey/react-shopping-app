import React from 'react';
import './App.css';
import Side from './Component/Side';
import Mainbar from './Component/Main';

function App() {
  return (
    <div className="App">
      <div class ="container-fluid">
        <div class ="row">
          <div class ="col-2">
            <Side></Side>
          </div>
          <div class ="col-10">
            <Mainbar></Mainbar>
          </div>
         



        </div>
      </div>
    </div>
  );
}

export default App;
