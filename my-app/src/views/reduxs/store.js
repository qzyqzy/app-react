import { createStore } from 'redux'

let defaultStore = []

function reducer(state = defaultStore, action) { 
    let { type, obj } = action
    switch (type) {
        case 'ADD':
            return state = [obj, ...state]
        default:
            break;
    }
}

const store = createStore(reducer)

export default store