import React from 'react'
import { createProvider } from 'funcup'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'axs-ui'
import Header from './Header'
import Controls from './Controls'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Controls />
        <Footer />
      </div>
    )
  }
}

const initialState = {
  color: '#00ffd0',
  backgroundColor: '#00483b',
  grid: 16,
  outline: true,
  disabled: true,
  center: false
}

export default createProvider(initialState)(App)
