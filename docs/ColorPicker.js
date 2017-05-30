import React from 'react'
import {
  Flex,
  Box,
  Button,
  Input,
} from 'axs-ui'
import colors from './colors'

const Chip = props => (
  <Button
    css={{
      display: 'block',
      width: props.size || 24,
      height: props.size || 24,
      backgroundColor: props.value,
      borderRadius: 0,
      ':hover': {
        backgroundColor: props.value,
        transform: `scale(${9/8})`,
        boxShadow: '0 0 4px rgba(0,0,0,.25)'
      }
    }}
    onClick={props.onClick}
  />
)

class ColorPicker extends React.Component {
  constructor () {
    super()
    this.state = {
      open: false
    }

    this.toggle = () => this.setState({ open: !this.state.open })
  }

  render () {
    const { value, onChange } = this.props
    const { open } = this.state

    return (
      <Box css={css.root}>
        <Flex>
          <Chip
            value={value}
            size={40}
            onClick={this.toggle}
          />
          <Input
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </Flex>
        {open && (
          <Box
            css={css.overlay}
            onClick={this.toggle}
          />
        )}
        {open && (
          <Box css={css.menu}>
            {colors.map((hue, i) => (
              <Flex key={i}>
                {[...hue.value].reverse().map((shade, j) => (
                  <Box key={j}>
                    <Chip
                      value={shade}
                      onClick={e => {
                        this.toggle()
                        onChange(shade)
                      }}
                    />
                  </Box>
                ))}
              </Flex>
            ))}
          </Box>
        )}
      </Box>
    )
  }
}

const css = {
  root: {
    position: 'relative'
  },
  overlay: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  menu: {
    position: 'absolute',
    zIndex: 2,
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: 2,
    backgroundColor: '#fff',
    boxShadow: '0 0 32px rgba(0,0,0,.25)'
  }
}

export default ColorPicker
