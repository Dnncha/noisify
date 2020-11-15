import React from 'react'
import classnames from 'classnames'
import Button from 'react-bootstrap/Button'

const ControlButton = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <Button className={classnames('button', className)} {...otherProps}>
      {children}
    </Button>
  )
}

export default ControlButton
