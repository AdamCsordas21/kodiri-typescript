import {
  getFirstElement,
} from '.'

describe('getFirstElement function', () => {
  it('returns the first fruit of a list', () => {
    // when
    const firstFruit = getFirstElement(['apple', 'orange', 'banana'])
    // then
    expect(firstFruit).toEqual('apple')
  })
  
  it('returns the first character of a list', () => {
    // when
    const firstCharacter = getFirstElement(['Boris', 'Donald', 'Bill'])
    // then
    expect(firstCharacter).toEqual('Boris')
  })
})
