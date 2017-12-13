import React from 'react'
import connect from 'refunk'
import XRay from '../src/XRay'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Pre
} from 'rebass'
import nano from 'nano-style'
import { toggleXRay } from './updaters'
import Skull from './Skull'

const Root = nano('div')({
  '& *': {
    transitionProperty: 'color, background-color',
    transitionDuration: '.5s',
    transitionTimingFunction: 'ease-out'
  }
})


const Header = props => (
  <Root>
    <XRay {...props}>
      <Box p={[ 2, 4 ]}>
        <Flex py={5} align='center' wrap>
          <Box p={4} width={[ 1, 2/3 ]}>
            <Heading fontSize={[ 48, 64, 96 ]}>
              {'<XRay />'}
            </Heading>
            <Text fontSize={3} mb={4}>
              React CSS Layout Debugger
            </Text>
            <Button
              p={3}
              is='a'
              href='https://github.com/jxnblk/react-x-ray'
              children='GitHub'
              mr={3}
            />
            <Button
              p={3}
              onClick={e => props.update(toggleXRay)}
              children={props.disabled ? 'Enable' : 'Disable'}
              color='blue'
              border
              borderColor='blue'
              bg='transparent'
            />
            <Pre
              py={3}
              f={1}
              children='npm i react-x-ray'
            />
          </Box>
          <Flex p={4}
            width={[ 1, 1/3 ]}
            align='center'
            justify='center'>
            <Skull {...props} />
          </Flex>
        </Flex>
      </Box>
    </XRay>
  </Root>
)

export default connect(Header)
