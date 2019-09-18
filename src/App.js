import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MeatDept from './components/MeatDept';
import DairyDept from './components/DairyDept';
import FrozenDept from './components/FrozenDept';
import Main from './components/Main'


function App(){
  return(
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Main} />
        <Route exact path="/meat-dept" component={MeatDept} />
        <Route exact path="/dairy-dept" component={DairyDept} />
        <Route exact path="/frozen-dept" component={FrozenDept} />
      </div>
    </Router>
  )
}

export default App;