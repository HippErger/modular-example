// @flow
import { connect } from 'react-redux'
import Users from './Users'
import { fetchUsers } from '../../redux/Users'
import getUsersByCity from '../../selectors/getUsersByCity'

export type StateProps = {
  names: Array<*>,
}
export type DispatchProps = {
  getUsers: () => Dispatch,
}

const mapStateToProps = (state: State) => ({
  names: getUsersByCity(state),
})
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getUsers: () => dispatch(fetchUsers()),
})

export type ReduxProps = StateProps & DispatchProps
export default connect(mapStateToProps, mapDispatchToProps)(Users)
