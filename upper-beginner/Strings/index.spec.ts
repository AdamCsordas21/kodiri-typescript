import {
  concatenate,
  concatenateTwo,
  concatenateThree,
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
  
  it('concatenates three words', () => {
    const result = concatenateThree('Glory', 'Glory', 'ManUnited')
    expect(result).toEqual('Glory Glory ManUnited')
  })
})
