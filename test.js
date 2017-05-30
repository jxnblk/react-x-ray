import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import XRay from './src/XRay'

test('shapshot', t => {
  const json = render(<XRay />).toJSON()
  t.snapshot(json)
})
