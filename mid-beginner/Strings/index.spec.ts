import {
  concatenate,
  concatenateTwo,
  concatenateThree,
  getSize,
} from '.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    const result = concatenate('A', 'B')
    expect(result).toEqual('AB')
  })

  it('concatenates two lower characters', () => {
    const result = concatenate('a', 'b')
    expect(result).toEqual('ab')
  })

  it('concatenates two words', () => {
    const result = concatenateTwo('Hello', 'World')
    expect(result).toEqual('Hello World')
  })

  it('concatenates three words', () => {
    const result = concatenateThree('Hello', 'amazing', 'World')
    expect(result).toEqual('Hello amazing World')
  })
})

describe('get size function', () => {
  it('returns 5 for "Boris"', () => {
    const result = getSize('Boris')
    expect(result).toEqual(5)
  })
  
  it('returns 6 for "Donald', () => {
    const result = getSize('Donald')
    expect(result).toEqual(6)
  })
})
