import {
  concatenate,
  concatenateTwo,
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
})
