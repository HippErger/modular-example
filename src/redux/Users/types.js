// @flow

export type UsersActionTypes =
  | 'GET_USERS'
  | 'GET_USERS_SUCCESS'
  | 'GET_USERS_ERROR'

export type UsersState = {|
  +isFetching: boolean,
  +error: string,
  +users: Array<*>,
|}

export type UsersAction = {
  type: UsersActionTypes,
  payload?: *,
}
