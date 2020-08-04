import React from 'react'
class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: 'qzy',
            sex: '男',
            checkStatus: true,
            birthYear: "1992",
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
                <div>
                    <p>当前选中的性别为 {this.state.sex}</p>
                    <label htmlFor="">男</label>
                    <input type="radio" value="男" checked={this.state.sex === '男'} onChange={this.onRadio} />
                    <label htmlFor="">女</label>
                    <input type="radio" value="女" checked={this.state.sex === '女'} onChange={this.onRadio} />
                </div>
                <div>
                    <p>当前是否选中 {this.state.checkStatus ? '选中' : '未选中'}</p>
                    <label htmlFor="">请勾选</label>
                    <input type="checkbox" checked={this.state.checkStatus} onChange={this.onCheckbox} />
                </div>
                <div>
                    <p>当前选中年份 {this.state.birthYear}</p>
                    <label htmlFor="">选择年份</label>
                    <select value={this.state.birthYear} onChange={this.onSelect}>
                        <option value="0">请选择</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                    </select>

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
    onRadio = (ev) => {
        this.setState({
            sex: ev.target.value
        })
    }
    onCheckbox = (ev) => {
        this.setState({
            checkStatus: !this.state.checkStatus
        })
    }
    onSelect = (ev) => {
        this.setState({
            birthYear: ev.target.value
        })
    }
}
export default Input