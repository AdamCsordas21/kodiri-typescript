import {
  negate,
  amIAnAdult,
  flagChecker,
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

describe('negate function', () => {
  it('returns true when age is >= 18', () => {
    const result = amIAnAdult(19)
    expect(result).toEqual(true)
  })
  
  it('returns false when age is < 18', () => {
    const result = amIAnAdult(16)
    expect(result).toEqual(false)
  })
})

describe('flagChecker function', () => {
  it('returns a message when a given argument is set to true', () => {
    const result = flagChecker(true)
    expect(result).toEqual('Flag set to true')
  })
  
  it('returns a message when a given arguments is set to false', () => {
    const result = flagChecker(false)
    expect(result).toEqual('Flag set to false')
  })
})
