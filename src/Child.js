import React from 'react'
import cN from 'classnames'

function Child({bool}) {
  return (
    <div className={cN({
        always: false,
        active: bool
    })}>here</div>
  )
}

export default Child