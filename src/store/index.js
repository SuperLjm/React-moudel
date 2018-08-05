import {createStore, combineReducers} from 'redux'

import homedata from './home.js'
import kinddata from './kind'

const reducer = combineReducers({
    homedata,
    kinddata
})

const store = createStore (reducer)

export default store