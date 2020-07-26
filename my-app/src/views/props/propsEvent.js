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
                <h2>状态提升</h2>
                <p>将add件与list组件的相应数据变化反应到此组件、作相应的事件与数据处理</p>
                <Add onAdd={this.onAdd} />
                <List list={this.state.addList} />
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