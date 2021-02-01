import {
  Greeter,
  Greeter2
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
      // given
      const greeter = new Greeter2()
      // when
      const helloBorisMessage = greeter.greet('Boris')
      const helloDonaldMessage = greeter.greet('Donald')
      // then
      expect(helloBorisMessage).toEqual('Hello Boris')
      expect(helloDonaldMessage).toEqual('Hello Donald')
    })
  })
})
