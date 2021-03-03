import {
  getFirstName,
  getTotalScore,
  isGoodScore,
  getUserDetails,
} from '.'

describe('getFirstName function', () => {
  [{
    it: 'Returns the first name of Paul Pogba',
    player: { firstName: 'Paul', lastName: 'Pogba' },
    expected: 'Paul'
  }, {
    it: 'Returns the first name of Marcus Rashford',
    player: { firstName: 'Marcus', lastName: 'Rashford' },
    expected: 'Marcus'
  }].forEach(scenario => {
    it(scenario.it, () => {
      const result = getFirstName(scenario.player)
      expect(result).toEqual(scenario.expected)
    })
  })
})

describe('getTotalScore function', () => {
  [{
    it: 'Returns the total score for the first player',
    player: { score1: 65, score2: '54' },
    expected: 119
  }, {
    it: 'Returns total score for the second player',
    player: { score1: 56, score2: '42' },
    expected: 98
  }].forEach(scenario => {
    it(scenario.it, () => {
      const result = getTotalScore(scenario.player)
      expect(result).toEqual(scenario.expected)
    })
  })
})

describe('isLargeObject function', () => {
  it('returns false if the score is < 50', () => {
    const result = isGoodScore({ name: 'Boris', age: 50, score: 47 })
    expect(result).toEqual(false)
  })
  
  it('returns true if the score is >= 50', () => {
    const result = isGoodScore({ name: 'Donald', age: 65, score: 54 })
    expect(result).toEqual(true)
  })
})

describe('getUserDetails function', () => {
  it('returns the details for Boris', () => {
    const result = getUserDetails({ name: 'Boris', age: 55, location: 'London' })
    expect(result).toEqual('Boris aged 55 currently is in London.')
  })
  
  it('returns the details for Donald', () => {
    const result = getUserDetails({ name: 'Donald', age: 65, location: 'Washington' })
    expect(result).toEqual('Donald aged 65 currently is in Washington.')
  })
})
