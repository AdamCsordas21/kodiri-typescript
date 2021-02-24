import {
  add,
} from '.'

describe('add function', () => {
  it('adds two positive numbers', () => {
    const result = add(10, 7)
    expect(result).toEqual(17)
  })
})
