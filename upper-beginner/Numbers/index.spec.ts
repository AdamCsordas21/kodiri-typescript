import {
  add,
  subtract,
  multiplyTwo,
  multiplyThree,
  divide,
  remainder,
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
  
  it('multiplies three numbers', () => {
    const result = multiplyThree(3, 6, 9)
    expect(result).toEqual(162)
  })
})

describe('divide function', () => {
  it('divides two positive numbers', () => {
    const result = divide(7, 4)
    expect(result).toEqual(1.75)
  })
  
  it('divides two negative numbers', () => {
    const result = divide(-8, - 5)
    expect(result).toEqual(1.6)
  })
})

describe('remainder function', () => {
  it('gets them modulus between two positive numbers', () => {
    const result = remainder(7, 5)
    expect(result).toEqual(2)
  })
  
  it('gets them modulus between two negative numbers', () => {
    const result = remainder(-7, -3)
    expect(result).toEqual(-1)
  })
})
