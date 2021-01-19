import {
  concatenate,
} from './.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    // when
    const result = concatenate('A', 'B')
    // then
    expect(result).toEqual('AB')
  })
})
