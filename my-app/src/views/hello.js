import React from 'react';

let message = 'hello wolrd!'
let classStatus = true
let htmlStr = '<b>加粗显示的文本、富文本</b>'
function Hello() {
    return (
        <div>
            <h2>基本使用</h2>
            <h1 className="hello">{message}</h1>
            <div>
                <p>{message.split('').join('-')}</p>
            </div>
            { /* 动态的class */}
            <div className={`${classStatus ? 'hello' : ''}`}>动态的className</div>
            {/* style */}
            <div style={{ backgroundColor: 'pink', color: '#fff', textAlign: 'center' }}>style样式</div>
            <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
        </div>
    )
}

export default Hello