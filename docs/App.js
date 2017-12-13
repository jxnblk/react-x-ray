import React from 'react'
import connect from 'refunk'
import Rebass from 'rebass'
import Header from './Header'
import Controls from './Controls'
import Footer from './Footer'

const App = connect(class extends React.Component {
  render () {
    return (
      <React.Fragment>
        {style}
        <Rebass.Provider>
          <Header />
          <Controls />
          <Footer />
        </Rebass.Provider>
      </React.Fragment>
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

const style = <style
  dangerouslySetInnerHTML={{
    __html: `*{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.5;margin:0}`
  }}
/>

export default App
