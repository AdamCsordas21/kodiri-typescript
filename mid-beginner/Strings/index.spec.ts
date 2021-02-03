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
    const result = concatenateTwo('Hello', 'World')
    expect(result).toEqual('Hello World')
  })

  it('concatenates three words', () => {
    const result = concatenateThree('Hello', 'amazing', 'World')
    expect(result).toEqual('Hello amazing World')
  })
})
