import {
  add,
  multiplyTwo,
  multiplyThree,
} from '.'

describe('add function', () => {
  it('adds two positive numbers', () => {
    const result = add(5, 4)
    expect(result).toEqual(9)
  })
  
  it('adds two negative numbers', () => {
    const result = add(-3, -2)
    expect(result).toEqual(-5)
  })
})

describe('multiply function', () => {
  it('multiplies two numbers', () => {
    const result = multiplyTwo(5, 4)
    expect(result).toEqual(20)
  })
  
  it('multiplies three numbers', () => {
    const result = multiplyThree(7, 7, 7)
    expect(result).toEqual(343)
  })
})
