import {
  negate,
  amIAnAdult,
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

describe('negate function', () => {
  it('returns true when age is >= 18', () => {
    // when
    const result = amIAnAdult(19)
    // then
    expect(result).toEqual(true)
  })
  
  it('returns false when age is < 18', () => {
    // when
    const result = amIAnAdult(16)
    // then
    expect(result).toEqual(false)
  })
})
