import {
  concatenate,
} from '.'

describe('concatenate function', () => {
  it('concatenate two upper characters', () => {
    const result = concatenate('A', 'B')
    expect(result).toEqual('AB')
  })
})
