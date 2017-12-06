// @flow
import React, { PureComponent } from 'react'
import type { ReduxProps } from './'
import './Users.style.css'

export type Props = ReduxProps & {
}

export default class Users extends PureComponent<Props> {

  componentWillMount () {

    const {
      getUsers,
    } = this.props

    getUsers()

  }


  render () {

    const { names } = this.props

    return (
      <div>
        {
          names.map(({ name }, index) =>
            <div
              key={index}
              style={{
                color: name.color,
              }}
              className={name.color}
            >
              {name.title}
              &nbsp;
              {name.first}
              &nbsp;
              {name.last}
            </div>
          )
        }
      </div>
    )

  }

}
