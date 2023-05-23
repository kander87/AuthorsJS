import React from 'react';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom'
import Update from './views/Update';
import Create from './views/Create';
import 'bootstrap/dist/css/bootstrap.css';




//this is just going to help us make sure the main file is being pulled correctly
//and allow us to test our backend to front end communication
//THIS IS NOT THE FINAL APP.js SETUP!!!
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element= {<Update />} path="/edit/:id"/>
        <Route element={<Create />} path="/new" />
      </Routes>
    </div>
  );
}
export default App;
