import React from 'react';
// 地址栏路由 HashRouter => hash  BrowserRouter => history
// 声明式导航
// Link NavLink 可以设置选中时的样式
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link
} from "react-router-dom";
import './App.css';

import Hello from './views/hello'
import If from './views/if'
import For from './views/for'
import Event from './views/event'
import Input from './views/input'
import PropsEvent from './views/props/propsEvent'
import ReduxsEvent from './views/reduxs/reduxsEvent'
import ReactReduxsEvent from './views/reactRedux/reactReduxEvent'
import RouterDom from './views/router'
let appDom = (
  <Router>
    <div>
      <nav className="router-wrap">
        <ul>
          <li>
            <Link exact to="/" activeClassName="router-select">Hello-基本使用</Link>
          </li>
          <li>
            <Link to="/if" activeClassName="router-select">条件判断</Link>
          </li>
          <li>
            <Link to="/for" activeClassName="router-select">循环</Link>
          </li>
          <li>
            <Link to="/event" activeClassName="router-select">事件</Link>
          </li>
          <li>
            <Link to="/input" activeClassName="router-select">表单</Link>
          </li>
          <li>
            <Link to="/props" activeClassName="router-select">props</Link>
          </li>
          <li>
            <Link to="/redux" activeClassName="router-select">redux</Link>
          </li>
          <li>
            <Link to="/react/redux" activeClassName="router-select">react-redux</Link>
          </li>
          <li>
            <Link to="/router" activeClassName="router-select">路由</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/if">
          <If />
        </Route>
        <Route path="/for">
          <For />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/input">
          <Input />
        </Route>
        <Route path="/redux" component={ReduxsEvent} />
        <Route path="/react/redux" component={ReactReduxsEvent} />
        
        <Route path="/props" render={() => <PropsEvent />}></Route>
        <Route path="/router" component={RouterDom}></Route>
        <Route path="/">
          <Hello />
        </Route>
      </Switch>

    </div>
  </Router>
)

function App() {
  return appDom;
}

export default App;
