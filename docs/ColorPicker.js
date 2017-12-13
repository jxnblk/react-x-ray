import React from 'react'
import {
  Flex,
  Box,
  Input,
} from 'rebass'
import nano from 'nano-style'
import colors from './colors'

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
      <Root>
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
          <Overlay onClick={this.toggle} />
        )}
        {open && (
          <Menu>
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
          </Menu>
        )}
      </Root>
    )
  }
}

const Root = nano('div')({
  position: 'relative'
})

const Overlay = nano('div')({
  position: 'fixed',
  zIndex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

const Menu = nano('div')({
  position: 'absolute',
  zIndex: 2,
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: 2,
  backgroundColor: '#fff',
  boxShadow: '0 0 32px rgba(0,0,0,.25)'
})

const Chip = nano('button')(props => ({
  display: 'block',
  width: px(props.size || 24),
  height: px(props.size || 24),
  backgroundColor: props.value,
  borderRadius: 0,
  border: 0,
  '&:hover': {
    backgroundColor: props.value,
    transform: `scale(${9/8})`,
    boxShadow: '0 0 4px rgba(0,0,0,.25)'
  }
}))

const px = n => n + 'px'

export default ColorPicker
