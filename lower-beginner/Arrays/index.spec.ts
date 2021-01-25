import {
  getFirstElement,
  getListSize,
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

describe('getListSize function', () => {
  it('returns the length of a list of elements', () => {
    // when
    const player1Size = getListSize(['Boris', 35, 'boris@gmail.co.uk'])
    const player2Size = getListSize(['Donald', 21, 7, 10])
    // then
    expect(player1Size).toEqual(3)
    expect(player2Size).toEqual(4)
  })
})
