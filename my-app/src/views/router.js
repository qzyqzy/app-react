import React from 'react';
import {
    Route,
    NavLink as Link
} from "react-router-dom";

class RouterDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>路由</h2>
                <ul>
                    <li>
                        <Link to="/router/route/1" activeClassName="router-select">路由1</Link>
                    </li>
                    <li>
                        <Link to="/router/route/2" activeClassName="router-select">路由2</Link>
                    </li>
                    <li>
                        <button onClick={this.onBtn}>路由跳转</button>
                    </li>
                </ul>
                <Route path="/router/route/:id" component={Route1}>
                </Route>
                {/* 这样的写法未能获取到路由信息 */}
                {/* <Route path="/router/route/:id">
                    <Route1 />
                </Route> */}
            </div>
        )
    }
    onBtn = () => {
        this.props.history.push('/router/route/3', { name: 'qzy', age: 10 })
    }
}
class Route1 extends React.Component {
    render() {
        console.log('-----获取的路由信息-----');
        console.log(this.props)
        let { id } = this.props.match.params
        return (
            <div>
                <p>router/{id}</p>
            </div >
        )
    }
}
export default RouterDom;