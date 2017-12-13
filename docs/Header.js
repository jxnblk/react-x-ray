import React from 'react'
import { connect } from 'funcup'
import XRay from '../src/XRay'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from 'axs-ui'
import { toggleXRay } from './updaters'
import Skull from './Skull'

const Header = props => (
  <Box css={css.root}>
    <XRay {...props}>
      <Box p={[ 1, 3 ]} is='header'
        borderBottom
        borderColor='gray'>
        <Flex py4
          alignItems='center'
          flexWrap='wrap'>
          <Box p3 width={[ 1, 2/3 ]}>
            <Heading fontSize={[ 48, 64, 96 ]}>
              {'<XRay />'}
            </Heading>
            <Text fontSize={3} mb3>
              React CSS Layout Debugger
            </Text>
            <Button
              p2
              caps
              fontSize={5}
              href='https://github.com/jxnblk/react-x-ray'
              children='GitHub'
              mr2
            />
            <Button
              p2
              caps
              fontSize={5}
              onClick={e => props.update(toggleXRay)}
              children={props.disabled ? 'Enable' : 'Disable'}
              color='blue'
              border
              borderColor='blue'
              css={{
                backgroundColor: 'transparent',
                ':hover': {
                  color: 'white'
                }
              }}
            />
            <Box is='pre'
              py2
              css={{
                fontFamily: 'Menlo, monospace',
                fontSize: 14,
              }}
              children='npm i react-x-ray'
            />
          </Box>
          <Flex p3
            width={[ 1, 1/3 ]}
            alignItems='center'
            justifyContent='center'>
            <Skull {...props} />
          </Flex>
        </Flex>
      </Box>
    </XRay>
  </Box>
)

const css = {
  root: {
    '*': {
      transitionProperty: 'color, background-color',
      transitionDuration: '.5s',
      transitionTimingFunction: 'ease-out'
    }
  }
}

export default connect()(Header)
