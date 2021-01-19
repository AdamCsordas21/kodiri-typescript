import {
  concatenate,
  concatenateTwo,
  concatenateThree,
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
