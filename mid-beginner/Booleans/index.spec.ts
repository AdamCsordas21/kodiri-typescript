import {
  negate,
} from '.'

describe('negate function', () => {
  it('returns true when received false', () => {
    const result = negate(true)
    expect(result).toEqual(false)
  })
  it('returns false when received false', () => {
    const result = negate(false)
    expect(result).toEqual(true)
  })
})
