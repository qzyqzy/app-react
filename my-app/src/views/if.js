import React from 'react'


let redBox = <div className="red">red</div>
let yellowBox = <div className="yellow">yellow</div>
let pinkBox = <div className="pink">pink</div>

let val = 'red'
function If() {
    return (
        <div>
            <h2>条件判断</h2>
            {
                pinkBox
            }
            {
                val === 'red' ? redBox : ''
            }
            {
                val === 'red' && redBox
            }
            {
                (val !== 'red') || yellowBox
            }
        </div>
    )
}
export default If