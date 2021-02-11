import {
  checkEmail,
  findFirstPositiveNum,
  sum,
  isNumericList,
  getDriverTitles,
} from '.'

describe('checkEmail', () => {
  it('determines whether a player has an email address or not', () => {
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
    expect(positiveNum3).toEqual('No positive number available.')
  })
})

describe('sum', () => {
  it('it adds two or three numbers', () => {
    const result1 = sum(1, 2)
    const result2 = sum(-1, 2, -3)
    expect(result1).toEqual(3)
    expect(result2).toEqual(-2)
  })
})

describe('isNumericList', () => {
  it('checks if all the elements of the list are numbers', () => {
    const result1 = isNumericList([1, 4, 3])
    const result2 = isNumericList([1, '4', 3])
    expect(result1).toEqual(true)
    expect(result2).toEqual(false)
  })
})

describe('getDriverTitles', () => {
  it('returns the driver world titles, if any', () => {
    const driver1 = { name: 'Fernando Alonso', titles: [2005, 2006] }
    const driver2 = { name: 'Mika Salo' }
    const driver3 = { name: 'James Hunt', titles: [1976] }
    const driver1Titles = getDriverTitles(driver1)
    const driver2Titles = getDriverTitles(driver2)
    const driver3Titles = getDriverTitles(driver3)
    expect(driver1Titles).toEqual([2005, 2006])
    expect(driver2Titles).toEqual('No titles yet')
    expect(driver3Titles).toEqual([1976])
  })
})
