import {
  getFirstName,
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
