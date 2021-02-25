import {
  getFirstElement,
} from '.'

describe('getFirstElement function', () => {
  it('returns the first fruit of a list', () => {
    const result = getFirstElement(['apple', 'orange', 'banana'])
    expect(result).toEqual('apple')
  })
})
