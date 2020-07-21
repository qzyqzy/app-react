import React from 'react';

let nameArr = [{ name: 'q' }, { name: 'z' }, { name: 'y' }]
let obj = {
    name: 'qzy',
    age: 18
}
function For() {
    return (
        <div>
            <h3>数组、对象循环</h3>
            <p>将任何类型的数据转换为数组、然后对数组进行数据转化即可</p>
            <ul>
                <li>
                    {
                        nameArr.map((item, index) =>
                            <p className="for-list" key={item.name}>
                                {`index: ${index}、name：${item.name}`}
                            </p>
                        )
                    }
                </li>
            </ul>
            <ul>
                <li>
                    {/* 数组或者对象单纯的循环无法渲染出内容 需要定义变量再次接收  */}
                    {
                        (() => {
                            let arr = []
                            for (const item of nameArr) {
                                arr.push(
                                    <p className="for-list" key={item.name}>
                                        {`name：${item.name}`}
                                    </p>
                                )
                            }
                            return arr
                        })()
                    }
                </li>
            </ul>
            <ul>
                <li>
                    {/* Object.entries(obj)   [ ["name", "qzy" ]] */}
                    {
                        Object.entries(obj).map(([key, value], index) => {
                            return <p className="for-list" key={key}>
                                {`index: ${index}、name：${value}`}
                            </p>
                        })
                    }
                </li>
            </ul>
        </div>
    )
}

export default For