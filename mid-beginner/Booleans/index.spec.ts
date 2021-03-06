import {
  negate,
  amIAdult,
  flagChecker,
  hasVictoryChances,
  amIAwake,
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
    const result = amIAdult(19)
    expect(result).toEqual(true)
  })
  
  it('returns false when age is < 18', () => {
    const result = amIAdult(16)
    expect(result).toEqual(false)
  })
})

describe('flagChecker function', () => {
  it('returns a message when a given argument is set to true', () => {
    const result = flagChecker(true)
    expect(result).toEqual('Flag set to true')
  })
  
  it('returns a message when a given argument is set to false', () => {
    const result = flagChecker(false)
    expect(result).toEqual('Flag set to false')
  })
})

describe('hasVictoryChances function', () => {
  [{
    title: 'can\'t win the race if both rider and bike fail',
    isGoodRider: false, hasGoodBike: false, expected: false
  }, {
    title: 'can\'t win the race if rider is good but bike isn\'t',
    isGoodRider: true, hasGoodBike: false, expected: false
  }, {
    title: 'can\'t win the race if the bike is good but the rider isn\'t',
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

describe('amIAwake function', () => {
  [{
    title: (
      'returns false if you slept less than 8 hours and you had less then two cups of coffee'
    ),
    sleepHours: 7, coffeeCups: 1, awake: false
  }, {
    title: (
      'returns true if you slept at least 8 hours even if you had less than two cups of coffee'
    ),
    sleepHours: 8, coffeeCups: 1, awake: true
  }, {
    title: (
      'returns true if you slept less than 8 hours but you had at least 2 cups of coffee'
    ),
    sleepHours: 7, coffeeCups: 2, awake: true
  }, {
    title: (
      'returns true if you slept at least 8 hours and you had at least 2 cups of coffee'
    ),
    sleepHours: 8, coffeeCups: 2, awake: true
  }].forEach(({ sleepHours, coffeeCups, awake }) => {
    const result = amIAwake(sleepHours, coffeeCups)
    expect(result).toEqual(awake)
  })
})
