import React from 'react';
import store from './store'
class List extends React.Component {
    componentDidMount() {
        // 事件触发之后执行
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    render() {   
        return (
            <ul>
                <h2>这是list组件 上面添加的内容会显示在这里</h2>
                {
                    store.getState()&&store.getState().list.map(item =>
                        <li key={item.id}>{item.value}</li>
                    )
                }
            </ul>
        )
    }
}
export default List