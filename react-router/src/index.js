import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route  }  from 'react-router-dom'
// import { HashRouter as Router, Route  }  from './react-router-dom'
import Home from './Home'
import User from './User'

export default class App extends Component {
  render() {
    return (
      // 方法都写在router里面 被route调用
      <Router>
         {/* Route通过path与location对比，如果相同的话去渲染组件 */}
          <Route path="/home" component={Home}></Route>
          {/* <Redirect from='/' to='/home' component={Home}></Redirect> */}
          <Route path="/user" component={User}></Route>
      </Router>
    )
  }
}

ReactDOM.render( <App />,
  document.getElementById('root')
);

