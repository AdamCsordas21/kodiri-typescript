import {
  Greeter,
  Greeter2,
  Player,
} from '.'

describe('Greeter class', () => {
  describe('greet method', () => {
    it('returns a "hello world" message', () => {
      const greeter = new Greeter()
      const result = greeter.greet()
      expect(result).toEqual('Hello World')
    })
  })
})

describe('Greeter class', () => {
  describe('greet method', () => {
    it('returns a "hello world" message to a given user', () => {
      const greeter = new Greeter2()
      const helloBorisMessage = greeter.greet('Boris')
      const helloDonaldMessage = greeter.greet('Donald')
      expect(helloBorisMessage).toEqual('Hello Boris')
      expect(helloDonaldMessage).toEqual('Hello Donald')
    })
  })
})

describe('Player class', () => {
  describe('getUserName method' , () => {
    it('returns a Boris when passed to the constructor', () => {
      const player = new Player('Boris')
      const userName = player.getUserName()
      expect(userName).toEqual('Boris')
    })
    it('returns a Donald when passed to the construtor', () => {
      const player = new Player('Donald')
      const userName = player.getUserName()
      expect(userName).toEqual('Donald')
    })
  })
})
