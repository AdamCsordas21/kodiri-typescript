import {
  getFirstElement,
} from '.'

describe('getFirstElement function', () => {
  it('returns the first fruit of a list', () => {
    const firstFruit = getFirstElement(['apple', 'orange', 'banana'])
    expect(firstFruit).toEqual('apple')
  })
  
  it('returns the first element of a list', () => {
    const firstCharacter = getFirstElement(['Boris', 'Donald', 'Bill'])
    expect(firstCharacter).toEqual('Boris')
  })
})
