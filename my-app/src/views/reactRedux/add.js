import React from 'react';
import { connect } from 'react-redux'
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
        this.props.onAdd({
            id: Date.now(),
            value: this.state.value
        })
        // 然后将数据清空
        this.setState({
            value: ''
        })
    }
}
// add组件是发送方 需要实现第二个参数 
// 注入 dispatch 和全局 state 
// 这会导致每次 action 都触发整个 TodoApp 重新渲染，你做的所有性能优化都将付之东流
export default connect(null, (dispatch) => {
    return {
        onAdd: (obj) => {
            dispatch({
                type: 'ADD',
                obj
            })
        }
    }
})(Add)