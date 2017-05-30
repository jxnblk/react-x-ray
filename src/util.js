import chroma from 'chroma-js'

export const gradient = (angle = 0, size, color) =>
  `linear-gradient(${angle}deg, transparent, transparent ${size - 1}px, ${color} ${size - 1}px)`

export const alpha = (val, a) => {
  try {
    return chroma(val).alpha(a).css()
  } catch (e) {
    return val
  }
}
