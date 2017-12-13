import React from 'react'
import connect from 'refunk'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'axs-ui'
import Header from './Header'
import Controls from './Controls'
import Footer from './Footer'

const App = connect(class extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Controls />
        <Footer />
      </div>
    )
  }
})

App.defaultProps = {
  color: '#00ffd0',
  backgroundColor: '#00483b',
  grid: 16,
  outline: true,
  disabled: true,
  center: false
}

export default App
