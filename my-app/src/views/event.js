import React from 'react';

class Event extends React.Component {
    constructor() {
        super()
        this.onRed3 = this.onRed3.bind(this)
    }
    render() {
        return (
            <div>
                <h2>事件</h2>
                <p>普通函数可以通过绑定this、或者直接使用箭头函数</p>
                <div className="red" onClick={this.onRed}>默认点击事件</div>
                <div className="red" onClick={this.onRed1.bind(this)}>点击事件1</div>
                <div className="red" onClick={this.onRed2}>点击事件2</div>
                <div className="red" onClick={this.onRed3}>点击事件3</div>
            </div>
        )
    }
    onRed() {
        console.log('onRed事件触发，此时无法获取到本组件')
        console.log(this)
    }
    onRed1() {
        console.log('onRed1事件触发，绑定this 此时可以获取到本组件')
        console.log(this)
    }
    onRed2 = () => {
        console.log('onRed2事件触发，箭头函数 此时可以获取到本组件')
        console.log(this)
    }
    onRed3() {
        console.log('onRed事件触发，构建时已处理this 此时可以获取到本组件')
        console.log(this)
    }

}

export default Event