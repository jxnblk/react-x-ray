import React from 'react'
import {
  Flex,
  Box,
  Text
} from 'rebass'
import nano from 'nano-style'
import { space } from 'styled-system'

const Link = nano('a')({
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '14px',
  color: 'inherit',
  ':hover': {
    textDecoration: 'underline'
  }
}, space)

const Footer = props => (
  <Flex is='footer' p={3} align='baseline'>
    <Link mr={2} href='https://github.com/jxnblk/react-x-ray'>
      GitHub
    </Link>
    <Link mr={2} href='http://jxnblk.com'>
      Made by Jxnblk
    </Link>
    <Text fontSize={1}>
      Inspired by
      {' '}
      <Link
        href='http://tachyons.io/xray/'
        children='Tachyons X-RAY'
      />
    </Text>
  </Flex>
)

export default Footer
