import React from 'react'
import { skull } from 'geomicons-open/src/index.js'

const Skull = props => (
  <svg
    viewBox='0 0 32 32'
    width={props.size}
    height={props.size}
    style={{
      display: 'block',
      margin: 0,
      fill: props.color,
      opacity: props.disabled ? 0 : .75
    }}
  >
    <path d={skull} />
  </svg>
)

Skull.defaultProps = {
  size: 192
}

export default Skull
