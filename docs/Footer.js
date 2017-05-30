import React from 'react'
import {
  Flex,
  Box,
  Text
} from 'axs-ui'

const Link = props => (
  <Text
    {...props}
    css={{
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 14,
      ':hover': {
        textDecoration: 'underline'
      }
    }}
  />
)

const Footer = props => (
  <Flex is='footer' p3 alignItems='baseline'>
    <Link mr2 href='https://github.com/jxnblk/react-x-ray'>
      GitHub
    </Link>
    <Link mr2 href='http://jxnblk.com'>
      Made by Jxnblk
    </Link>
    <Text fontSize={5}>
      Inspired by
      <Text is='a'
        css={{ color: 'inherit' }}
        href='http://tachyons.io/xray/'
        children='Tachyons X-RAY'
      />
    </Text>
  </Flex>
)

export default Footer
