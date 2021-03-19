import {
  Greeter,
  Greeter2,
  Player,
  Player2,
  Country,
} from '.'

describe('Greeter class', () => {
  describe('greet method', () => {
    it('returns a "hello world" message', () => {
      const greeter = new Greeter()
      const result = greeter.greet()
      expect(result).toEqual('Hello World!')
    })
  })
})

describe('Greeter class', () => {
  describe('greet method', () => {
    it('returns a message to a given user', () => {
      const greeter = new Greeter2()
      const helloBorisMessage = greeter.greet('Boris')
      const helloDonaldMessage = greeter.greet('Donald')
      expect(helloBorisMessage).toEqual('Hello Boris')
      expect(helloDonaldMessage).toEqual('Hello Donald')
    })
  })
})

describe('Player class', () => {
  describe('getUserName method', () => {
    it('returns a Boris when passed to the constructor', () => {
      const player = new Player('Boris')
      const userName = player.getUserName()
      expect(userName).toEqual('Boris')
    })
  })
})

describe('Player class', () => {
  describe('getUserName method', () => {
    it(`returns a \'Boris Johnson\' when these details are passed
      to the construstoras as individual arguments`, () => {
      const player = new Player2('Boris', 'Johnson')
      const userName = player.getUserName()
      expect(userName).toEqual('Boris Johnson')
    })

    it(`returns a \'Donald Trump\' when these details are passed
      to the constructor as individual arguments`, () => {
      const player = new Player2('Donald', 'Trump')
      const userName = player.getUserName()
      expect(userName).toEqual('Donald Trump')
    })
  })
})

describe('Player class', () => {
  describe('getCountryPopulation method', () => {
    it('returns a message with the population of Italy', () => {
      const country = new Country('Italy', 60.59)
      const populationMsg = country.getCountryPopulation()
      expect(populationMsg).toEqual('60.59 million people live in Italy')
    })
  })
})
