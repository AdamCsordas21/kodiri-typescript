import {
  checkEmail,
  findFirstPositiveNum,
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
