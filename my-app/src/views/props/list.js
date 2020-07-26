import React from 'react';

class List extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <ul>
                <h2>这是list组件 上面添加的内容会显示在这里</h2>
                {
                    this.props.list.map(item =>
                        <li key={item.id}>{item.value}</li>
                    )
                }
            </ul>
        )
    }
}
export default List