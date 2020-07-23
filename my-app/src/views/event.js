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
                <p>事件参数 先获取的是传递的参数 然后才是事件参数</p>
                <div className="red" onClick={this.onRed}>默认点击事件</div>
                <div className="red" onClick={this.onRed1.bind(this, '点击事件1')}>点击事件1</div>
                <div className="red" onClick={this.onRed2('点击事件2')}>点击事件2</div>
                <div className="red" onClick={this.onRed3}>点击事件3</div>
            </div>
        )
    }
    onRed() {
        console.log('onRed事件触发，此时无法获取到本组件')
        console.log(this)
    }
    onRed1(val, ev) {
        console.log('onRed1事件触发，绑定this 此时可以获取到本组件')
        console.log(this)
        console.dir(`传递的参数为：${val}`)
        // 此事件为合成的事件
        // 合成之后的事件两个获取的值都相同
        console.log(ev.target) // 触发事件的元素
        console.log(ev.currentTarget) // 绑定事件的元素

        // 此时将事件绑定到了最外层document
        console.log(ev.nativeEvent.target) // 触发事件的元素
        console.log(ev.nativeEvent.currentTarget) // 绑定事件的元素
    }
    // 需要传递参数时要再返回一个函数 
    // this.onRed2('点击事件2') 否则这里会先执行一次
    // onRed2 = () => {
    //     console.log('onRed2事件触发，箭头函数 此时可以获取到本组件')
    //     console.log(this)
    // }
    onRed2 = (val) => (ev) => {
        console.log('onRed2事件触发，箭头函数 此时可以获取到本组件')
        console.log(this)
        console.dir(`传递的参数为：${val}`)
        // 此事件为合成的事件
        // 合成之后的事件两个获取的值都相同
        console.log(ev.target) // 触发事件的元素
        console.log(ev.currentTarget) // 绑定事件的元素
    }
    onRed3() {
        console.log('onRed事件触发，构建时已处理this 此时可以获取到本组件')
        console.log(this)
    }

}

export default Event