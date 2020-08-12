import React from 'react';
import store from './store'
class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入内容" value={this.state.value} onChange={this.onValueChange} />
                <button onClick={this.onBtn}>添加</button>
            </div>
        )
    }
    onValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onBtn = () => {
        // 使用redux dispatch 派发事件
        store.dispatch({
            type: 'ADD',
            obj: {
                id: Date.now(),
                value: this.state.value
            }
        })
        // 然后将数据清空
        this.setState({
            value:''
        })
    }
}
export default Add