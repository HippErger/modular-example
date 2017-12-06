// @flow
import type {
  State,
  UsersActionTypes,
} from '../../src/redux'

type ActionType =
  | UsersActionTypes

type Action =
  | { type: ActionType, payload?: * }

type GetState = () => State

type Dispatch = (action: Action | ThunkAction) => *

type ThunkAction = (dispatch: Dispatch, getState: GetState) => *
