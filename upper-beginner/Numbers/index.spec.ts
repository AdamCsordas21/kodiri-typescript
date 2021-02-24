import {
  add,
  subtract,
  multiplyTwo,
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

describe('substract function', () => {
  it('subtracts two positive numbers', () => {
    const result = subtract(8, 3)
    expect(result).toEqual(5)
  })
  
  it('subtracts two negative numbers', () => {
    const result = subtract(-33, -17)
    expect(result).toEqual(-16)
  })
})

describe('multiply function', () => {
  it('multiplies two numbers', () => {
    const result = multiplyTwo(7, 9)
    expect(result).toEqual(63)
  })
})
