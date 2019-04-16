import { combineReducers } from 'redux'
import traversal from './Traversal'
import summary from './Summary'
import conclusion from './Conclusion'
import modal from './Modal'

export default combineReducers({
    traversal, 
    summary,
    conclusion,
    modal 
})