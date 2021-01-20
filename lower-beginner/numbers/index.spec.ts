import {
  add,
  subtract,  
} from '.'

describe('add function', () => {
  it('adds two positive numbers', () => {
    // when
    const result = add(5, 4)
    // when
    expect(result).toEqual(9)
  })
  
  it('adds two negative numbers', () => {
    // when
    const result = add(-3, -2)
    // then
    expect(result).toEqual(-5)
  })
})

describe('subtract function', () => {
  it('subtracts two positive number', () => {
    // when
    const result = subtract(5, 4)
    // then
    expect(result).toEqual(1)
  })
  
  it('subtracts two negative numbers', () => {
    // when
    const result = subtract(-3, -2)
    // then
    expect(result).toEqual(-1)
  })
})
