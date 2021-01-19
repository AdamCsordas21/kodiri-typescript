import {
  concatenate,
  concatenateTwo,
  concatenateThree,
  getSize,
} from './.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    // when
    const result = concatenate('A', 'B')
    // then
    expect(result).toEqual('AB')
  })

  it('concatenates two lower characters', () => {
    // when
    const result = concatenate('a', 'b')
    // then
    expect(result).toEqual('ab')
  })

  it('concatenates two words', () => {
    // when
    const result = concatenateTwo('Hello', 'world')
    // then
    expect(result).toEqual('Hello world')
  })

  it('concatenates three words', () => {
    // when
    const result = concatenateThree('Hello', 'amazing', 'world')
    // then
    expect(result).toEqual('Hello amazing world')
  })
})

describe('getSize function', () => {
  it('returns 5 for "London"', () => {
    // when
    const result = getSize('London')
    // then
    expect(result).toEqual(6)
  })

  it('returns 6 for "England"', () => {
    // when
    const result = getSize('England')
    // then
    expect(result).toEqual(7)
  })
})
