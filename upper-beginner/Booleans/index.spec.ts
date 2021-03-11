import {
  negate,
  amIAnAdult,
  flagChecker,
  hasVictoryChances,
} from '.'

describe('negate function', () => {
  it('returns true when received false', () => {
    const result = negate(true)
    expect(result).toEqual(false)
  })
  
  it('returns false when received false', () => {
    const result = negate(false)
    expect(result).toEqual(true)
  })
})

describe('negate function', () => {
  it('returns true when age is >= 18', () => {
    const result = amIAnAdult(19)
    expect(result).toEqual(true)
  })
  
  it('returns false when age is < 18', () => {
    const result = amIAnAdult(16)
    expect(result).toEqual(false)
  })
})

describe('flagChecker function', () => {
  it('returns a message when a given argument is set to true', () => {
    const result = flagChecker(true)
    expect(result).toEqual('Flag set to true')
  })
  
  it('returns a message when a given arguments is set to false', () => {
    const result = flagChecker(false)
    expect(result).toEqual('Flag set to false')
  })
})

describe('hasVictoryChances function', () => {
  [{
    title: 'cannot win the race if both rider and bike fail',
    isGoodRider: false, hasGoodBike: false, expected: false
  }, {
    title: 'cannot win the race if rider is good but bike isn\'t',
    isGoodRider: true, hasGoodBike: false, expected: false
  }, {
    title: 'cannot win the race if the bike is good but the rider isn\'t',
    isGoodRider: false, hasGoodBike: true, expected: false
  }, {
    title: 'can win the race if both rider and bike are good',
    isGoodRider: true, hasGoodBike: true, expected: true
  }].forEach(({ title, isGoodRider, hasGoodBike, expected }) => {
    it(title, () => {
      const result = hasVictoryChances(isGoodRider, hasGoodBike)
      expect(result).toEqual(expected)
    })
  })
})
