import {
  getFirstName,
  getTotalScore,
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

describe('getTotalScore', () => {
  [{
    it: 'Returns the total score for the first player',
    player: { score1: 65, score2: '54' },
    expected: 119
  }, {
    it: 'Returns the total score for the second player',
    player: { score1: 56, score2: '42' },
    expected: 98
  }].forEach(scenario => {
    it(scenario.it, () => {
      const result = getTotalScore(scenario.player)
      expect(result).toEqual(scenario.expected)
    })
  })
})
