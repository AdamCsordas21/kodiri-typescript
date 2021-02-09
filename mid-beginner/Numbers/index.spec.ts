import {
  add,
  multiplyTwo,
  multiplyThree,
  divide,
  remainder,
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

describe('divide function', () => {
  it('divides two positive numbers', () => {
    const result = divide(5, 4)
    expect(result).toEqual(1.25)
  })

  it('divides two negative numbers', () => {
    const result = divide(-3, -4)
    expect(result).toEqual(0.75)
  })
})

describe('remainder function', () => {
  it('gets them modulus between two positive numbers', () => {
    const result = remainder(5, 4)
    expect(result).toEqual(1)
  })

  it('gets them modulus between two negative numbers', () => {
    const result = remainder(-14, -3)
    expect(result).toEqual(-2)
  })
})
