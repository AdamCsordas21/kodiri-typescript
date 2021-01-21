import {
  negate
} from '.'

describe('negate function', () => {
  it('returns true when received false', () => {
    // when
    const result = negate(true)
    // then
    expect(result).toEqual(false)
  })
  
  it('returns false when received false', () => {
    // when
    const result = negate(false)
    // then
    expect(result).toEqual(true)
  })

})