import { combineReducers } from 'redux'
import traversal from './traversal'
import summary from './summary'
import conclusion from './conclusion'
import modal from './modal'

export default combineReducers({
    traversal, 
    summary,
    conclusion,
    modal 
})