import {
  Greeter,
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