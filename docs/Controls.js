import React from 'react'
import connect from 'refunk'
import {
  Flex,
  Box,
  Button,
  Label,
  Checkbox,
  Slider,
} from 'rebass'
import {
  toggleXRay,
  toggleOutline,
  toggleCenter,
  setGrid,
  setColor,
  setBackgroundColor
} from './updaters'
import ColorPicker from './ColorPicker'

const Controls = props => (
  <Box p={3}>
    <Flex align='center' wrap>
      <Box p={2}>
        <Label m={0}>
          <Checkbox
            checked={!props.disabled}
            onChange={e => props.update(toggleXRay)}
            mr={1}
          />
          Enable X-Ray
        </Label>
      </Box>
      <Box ml='auto' p={2}>
        <Label>
          <Checkbox
            checked={props.outline}
            onChange={e => props.update(toggleOutline)}
            mr={2}
          />
          Outline
        </Label>
      </Box>
      <Box p={2}>
        <Label>
          <Checkbox
            checked={props.center}
            onChange={e => props.update(toggleCenter)}
            mr={1}
          />
          Center
        </Label>
      </Box>
      <Box p={2} width={256}>
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
      <Box p={2}>
        <Label>Color</Label>
        <ColorPicker
          value={props.color}
          onChange={v => props.update(setColor(v))}
        />
      </Box>
      <Box p={2}>
        <Label>Background Color</Label>
        <ColorPicker
          value={props.backgroundColor}
          onChange={v => props.update(setBackgroundColor(v))}
        />
      </Box>
    </Flex>
  </Box>
)

export default connect(Controls)
