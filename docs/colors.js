import palx from 'palx'

const palette = palx('#07c')

const colors = Object.keys(palette)
  .filter(key => Array.isArray(palette[key]))
  .map(key => ({ key, value: palette[key] }))

export default colors

