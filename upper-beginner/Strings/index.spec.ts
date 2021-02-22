import {
  concatenate,
  concatenateTwo,
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
    const result = concatenateTwo('Manchester', 'United')
    expect(result).toEqual('Manchester United')
  })
})
