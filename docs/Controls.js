import React from 'react'
import { connect } from 'funcup'
import {
  Flex,
  Box,
  Button,
  Label,
  Checkbox,
  Slider,
} from 'axs-ui'
import {
  toggleXRay,
  toggleOutline,
  setGrid,
  setColor,
  setBackgroundColor
} from './updaters'
import ColorPicker from './ColorPicker'

const Controls = props => (
  <Box p3>
    <Flex
      alignItems='center'
      flexWrap='wrap'>
      <Box p2>
        <Label>
          <Checkbox
            checked={!props.disabled}
            onChange={e => props.update(toggleXRay)}
            mr1
          />
          Enable X-Ray
        </Label>
      </Box>
      <Box ml='auto' p2>
        <Label>
          <Checkbox
            checked={props.outline}
            onChange={e => props.update(toggleOutline)}
            mr1
          />
          Outline
        </Label>
      </Box>
      <Box p2 width={256}>
        <Label>
          Grid Size ({props.grid}px)
        </Label>
        <Slider
          value={props.grid}
          min={0}
          max={32}
          step={4}
          onChange={e => props.update(setGrid(parseInt(e.target.value)))}
        />
      </Box>
      <Box p2>
        <Label>Color</Label>
        <ColorPicker
          value={props.color}
          onChange={v => props.update(setColor(v))}
        />
      </Box>
      <Box p2>
        <Label>Background Color</Label>
        <ColorPicker
          value={props.backgroundColor}
          onChange={v => props.update(setBackgroundColor(v))}
        />
      </Box>
    </Flex>
  </Box>
)

export default connect()(Controls)
