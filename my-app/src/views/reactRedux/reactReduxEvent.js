import React from 'react';
import Add from './add'
import List from './list'
class PropsEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            addList: []
        }
    }
    render() {
        return (
            <div>
                <h2>react-redux</h2>
                <Add />
                <List />
            </div>
        )
    }
    onAdd = (value) => {
        console.dir(value);
        // 此组件接收到事件之后 将数据处理
        this.setState({
            addList: [value, ...this.state.addList]
        })
    }
}
export default PropsEvent