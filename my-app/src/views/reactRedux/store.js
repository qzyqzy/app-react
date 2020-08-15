import { createStore } from 'redux'

let initState = {
    list: []
}
let reducer = (state = initState, action) => {
    let { type, obj } = action
    switch (type) {
        case 'ADD':
            return {
                ...state,
                list: [obj, ...state.list]
            }
        default:
            return state
    }
}

let store = createStore(reducer)

export default store