import {
  getFirstElement,
} from '.'

describe('getFirstElement function', () => {
  it('returns first fruit of a list', () => {
    const firstFruit = getFirstElement(['apple', 'orange', 'banana'])
    expect(firstFruit).toEqual('apple')
  })
  
  it('returns first character of a list', () => {
    const firstCharacter = getFirstElement(['Boris', 'Donald', 'Bill'])
    expect(firstCharacter).toEqual('Boris')
  })
})
