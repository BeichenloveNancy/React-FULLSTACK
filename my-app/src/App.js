import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Detail from './Detail';
import Edit from './Edit'

const RouterMap = () => {
  return <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/edit" component={Edit}></Route>
    </Switch>
  </Router>
}

// function App() {
//   return (
//     <Router>
//       <Route path="/home" component={Home}></Route>
//     </Router>
//   );
// }

export default RouterMap;
