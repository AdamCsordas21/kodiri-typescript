import {
  getFirstName,
} from '.'

describe('getFirstName function', () => {
  [{
    it: 'Returns the first name of Paul Pogba',
    player: { firstName: 'Paul', lastName: 'Pogba'},
    expected: 'Paul'
  }, {
    it: 'returns the first name of Marcus Rashford',
    player: { firstName: 'Marcus', lastName: 'Rashford' },
    expected: 'Marcus'
  }].forEach(scenario => {
    it(scenario.it, () => {
      // when
      const result = getFirstName(scenario.player)
      // then
      expect(result).toEqual(scenario.expected)
    })
  })
})
