import {createStore} from 'redux'
import RootReducer from './reducer/RootReducer'


const store = createStore(RootReducer)

export default store