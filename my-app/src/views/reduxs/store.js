import { createStore ,combineReducers} from 'redux'

// combineReducers 管理多个reducer
let list = (state = [], action) =>{ 
    let { type, obj } = action
    switch (type) {
        case 'ADD':
            return state = [obj, ...state]
        default:
            return state
    }
}

let reducer = combineReducers({list})

const store = createStore(reducer)

export default store