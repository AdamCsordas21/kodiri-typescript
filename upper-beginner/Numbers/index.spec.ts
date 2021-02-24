import {
  add,
} from '.'

describe('add function', () => {
  it('adds two positive numbers', () => {
    const result = add(10, 7)
    expect(result).toEqual(17)
  })
  
  it('adds two negative numbers', () => {
    const result = add(-21, -10)
    expect(result).toEqual(-31)
  })
})
