import React from 'react'

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: 'qzy'
        }
    }
    render() {
        return (
            <div>
                <h2>表单</h2>
                <div>
                    <label htmlFor="name">用户名：</label>
                    <input type="text" name="" id="name" value={this.state.userName} onChange={this.onTextChange()} />
                    <p>用户名为：{this.state.userName}</p>
                </div>
                <div>
                    <label htmlFor="name">用户名：</label>
                    <textarea type="text" name="" id="name" value={this.state.userName} onChange={this.onTextChange()} />
                    <p>用户名为：{this.state.userName}</p>
                </div>
            </div>
        )
    }
    onTextChange = () => (ev) => {
        let value = ev.target.value;
        this.setState({
            userName: value
        })
    }
}

export default Input