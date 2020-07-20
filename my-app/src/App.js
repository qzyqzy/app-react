import React from 'react';
import './App.css';

import Hello from './views/hello'
import If from './views/if'

// 函数式组件
function FunDom() {
  return (
    <div>
      <h4>这是函数式组件</h4>
    </div>
  )
}

// class 组件

class ClassDom extends React.Component {
  render() {
    return (
      <div>
        <h4>这是class组件</h4>
      </div>
    )
  }
}

let appDom = (
  <div>
    <h4>JSX语法</h4>
    <FunDom />
    <ClassDom />
    <hr />
    <h2>基本使用</h2>
    <Hello></Hello>
    <hr />
    <h2>条件判断</h2>
    <If />
    <hr />
    <hr />
    <hr />
  </div>
)

function App() {
  return appDom;
}

export default App;
