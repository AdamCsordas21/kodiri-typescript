import { helloWorld } from "."

describe('hello world', () => {
  it('says hello', () => {
    const name = 'world'
    expect(helloWorld(name)).toEqual('Hello world')
  })
})