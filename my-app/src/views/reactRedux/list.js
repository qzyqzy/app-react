import React from 'react';
import { connect } from 'react-redux'
class List extends React.Component {
    render() {
        return (
            <ul>
                <h2>这是list组件 上面添加的内容会显示在这里</h2>
                {
                    this.props.list.map(item =><li key={item.id}>{item.value}</li>)
                }
            </ul>
        )
    }
}

// list组件是接收方 需要实现第一个参数

export default connect((state) => {
    return { list: state.list }
})(List)