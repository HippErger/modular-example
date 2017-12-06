// @flow
import { getUsers } from '../../helpers/api/Users'
import type { UsersState, UsersAction } from './types'

// Action types
const GET_USERS_BEGIN: string = 'GET_USERS'
const GET_USERS_SUCCESS: string = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR: string = 'GET_USERS_ERROR'

// State
const initialState: UsersState = {
  isFetching: false,
  error: '',
  users: [],
}

// Reducer
const reducer = (state: UsersState = initialState, action: UsersAction) => {

  switch (action.type) {

  case GET_USERS_BEGIN:
    return {
      ...state,
      isFetching: true,
    }

  case GET_USERS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      users: action.payload,
      error: '',
    }

  case GET_USERS_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.payload,
      users: initialState.users,
    }

  default:
    return state

  }

}

// Action Creators

export const fetchUsersBegin = (): Action => ({
  type: GET_USERS_BEGIN,
})

export const fetchUsersSuccess = (users: Array<*>): Action => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersError = (error: Error): Action => ({
  type: GET_USERS_ERROR,
  payload: error,
})

// Async Action Creators

export const fetchUsers = (): ThunkAction =>
  (dispatch: *) => {
    dispatch(fetchUsersBegin())
    return getUsers()
      .then(users =>
        dispatch(fetchUsersSuccess(users))
      )
      .catch(error =>
        dispatch(fetchUsersError(error))
      )
  }

export default reducer
