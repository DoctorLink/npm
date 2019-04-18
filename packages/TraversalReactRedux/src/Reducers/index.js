import { combineReducers } from 'redux'
import traversal from './Traversal'
import chat from './Chat'
import summary from './Summary'
import conclusion from './Conclusion'
import modal from './Modal'

export const rootTraversalReducer = combineReducers({
    traversal, 
    summary,
    conclusion,
    modal 
})

export const rootChatReducer = combineReducers({
    traversal: chat, 
    summary,
    conclusion,
    modal 
})