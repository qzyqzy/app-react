import React from 'react';

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
        // add组件点击触发时 触发 onAdd 事件 
        // 并将添加的内容也传递出去
        this.props.onAdd({
            id: Date.now(),
            value: this.state.value
        })
        // 然后将数据清空
        this.setState({
            value:''
        })
    }
}
export default Add