import React from 'react'
import { css } from 'glamor'
import assign from 'object-assign'
import {
  string,
  number,
  bool,
  oneOfType
} from 'prop-types'
import { gradient, alpha } from './util'

class XRay extends React.Component {
  constructor () {
    super()

    this.getClassName = () => {
      const sx = this.getStyle()
      return css(sx).toString()
    }

    this.getStyle = () => {
      const {
        padding,
        color,
        backgroundColor,
        outline,
        grid,
        center,
        disabled,
        style
      } = this.props

      if (disabled) {
        return {
          padding
        }
      }

      return assign({}, style, {
        padding,
        color,
        backgroundColor,
        backgroundPosition: center ? 'center center' : 'left top',
        '& *': {
          color: outline ? `${color} !important` : null,
          outline: outline ? `1px solid ${alpha(color, 1/2)} !important` : null,
          backgroundColor: outline ? `${alpha(color, 1/8)} !important` : null,
        }
      }, getGrid(grid, alpha(color, 1/4)))
    }
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

const getGrid = (grid, color) => {
  if (!grid) return null
  const size = grid && typeof grid === 'number' ? grid : 8
  return {
    backgroundImage: `${gradient(0, size, color)}, ${gradient(90, size, color)}`,
    backgroundSize: `${size}px ${size}px`
  }
}

XRay.propTypes = {
  padding: oneOfType([ string, number ]),
  color: string,
  backgroundColor: string,
  outline: bool,
  grid: oneOfType([ number, bool ]),
  center: bool
}

XRay.defaultProps = {
  padding: 0,
  outline: true,
  grid: 8,
  color: '#6bf',
  backgroundColor: '#001424',
  center: false,
}

export default XRay
