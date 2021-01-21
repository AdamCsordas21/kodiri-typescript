import {
  negate,
  amIAnAdult,
  flagChecker,
  hasVictoryChances,
  amIAWake,
} from '.'

describe('negate function', () => {
  it('returns true when received false', () => {
    // when
    const result = negate(true)
    // then
    expect(result).toEqual(false)
  })
  
  it('returns false when received false', () => {
    // when
    const result = negate(false)
    // then
    expect(result).toEqual(true)
  })
})

describe('negate function', () => {
  it('returns true when age is >= 18', () => {
    // when
    const result = amIAnAdult(19)
    // then
    expect(result).toEqual(true)
  })
  
  it('returns false when age is < 18', () => {
    // when
    const result = amIAnAdult(16)
    // then
    expect(result).toEqual(false)
  })
})

describe('flagChecker function', () => {
  it('returns a message when given argument is set to true ', () => {
    // when
    const result = flagChecker(true)
    // then
    expect(result).toEqual('Flag set to true')
  })
  
  it('returns a message when given argument is set to false', () => {
    // when
    const result = flagChecker(false)
    // then
    expect(result).toEqual('Flag set to false')
  })
})

describe('hasVictoryChances function', () => {
  [{
    title: 'cannot win the race if both rider and bike fail',
    isGoodRider: false, hasGoodBike: false, expected: false
  }, {
    title: 'can\'t win the race if rider is good but bike isn\'t',
    isGoodRider: true, hasGoodBike: false, expected: false
  }, {
    title: 'can\'t win the race if bike is good but rider isn\'t',
    isGoodRider: false, hasGoodBike: true, expected: false
  }, {
    title: 'can win the race is both rider and bike are good',
    isGoodRider: true, hasGoodBike: true, expected: true
  }].forEach(({ title, isGoodRider, hasGoodBike, expected }) => {
    it(title, () => {
      // when
      const result = hasVictoryChances(isGoodRider, hasGoodBike)
      // then
      expect(result).toEqual(expected)
    })
  })
})

describe('amIAwake function', () => {
  [{
    title: (
      'returns false if you slept less than 8 hours and you had less than two cups of coffee'
    ),
    sleepHours: 7, coffeeCups: 1, awake: false
  }, {
    title: (
      'returns true if you slept at least 8 hours even if you had less than two cups of coffee'
    ),
    sleepHours: 8, coffeeCups: 1, awake: true
  }, {
    title: (
      'returns true if you slept less than 8 hours but you had at least two cups of coffee'
    ),
    sleepHours: 7, coffeeCups: 2, awake: true
  }, {
    title: (
      'returns true if you slept at least 8 hours and you had at least two cups of coffee'
    ),
    sleepHours: 8, coffeeCups: 2, awake: true
  }].forEach(({ sleepHours, coffeeCups, awake }) => {
    // when
    const result = amIAWake(sleepHours, coffeeCups)
    // then
    expect(result).toEqual(awake)
  })
})
