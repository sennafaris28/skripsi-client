// Library Imports
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Local Import
import Navbar from './components/Navbar';
import Attack from './components/Attack';
import Result from './components/Result';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path='/'>
            <Home />
          </Route> */}
          <Route path='/attack'>
            <Attack />
          </Route>
          <Route path='/result'>
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
