import {
  concatenate,
} from '.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    const result = concatenate('A', 'B')
    expect(result).toEqual('AB')
  })

  it('concatenates to lower characters', () => {
    const result = concatenate('a', 'b')
    expect(result).toEqual('ab')
  })
})
