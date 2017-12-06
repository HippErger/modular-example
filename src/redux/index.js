import users from './Users'
import type { UsersState } from './Users/types'
import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export type { UsersActionTypes } from './Users/types'

export type State = {
  users: UsersState
}

const rootReducer = combineReducers({
  users,
})

const middleware = [
  thunk,
]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    ...middleware
  )
))

export default store
