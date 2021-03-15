import {
  checkEmail,
  findFirstPositiveNum,
  sum,
  isNumericList,
} from '.'

describe('checkMail', () => {
  it('determies whether a player has an email address or not', () => {
    const resultWithEmail = checkEmail('Boris', 'boris@england.co.uk')
    const resultWithoutEmail = checkEmail('Boris')
    expect(resultWithEmail).toEqual('Email provided')
    expect(resultWithoutEmail).toEqual('Email not provided')
  })
})

describe('findFirstPositiveNumber', () => {
  it('returns the first positive number of a list, if any', () => {
    const positiveNum1 = findFirstPositiveNum([1, 2, 3])
    const positiveNum2 = findFirstPositiveNum([-1, 1])
    const positiveNum3 = findFirstPositiveNum([-1, -2])
    expect(positiveNum1).toEqual(1)
    expect(positiveNum2).toEqual(1)
    expect(positiveNum3).toEqual('No positive number available')
  })
})

describe('sum', () => {
  it('adds two or three numbers', () => {
    const result1 = sum(1, 2)
    const result2 = sum(-1, 2, -3)
    expect(result1).toEqual(3)
    expect(result2).toEqual(1)
  })
})

describe('isNumericList', () => {
  it('checks if all the elements of the list are numbers', () => {
    const result = isNumericList([1, 4, 3])
    const result2 = isNumericList([1, '4', 3])
    expect(result).toEqual(true)
    expect(result2).toEqual(false)
  })
})
