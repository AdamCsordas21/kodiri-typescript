import {
  getFirstElement,
  getListSize,
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

describe('getListSize function', () => {
  it('returns the length of a list of elements', () => {
    const player1Size = getListSize(['Boris', 55, 'boris@england.co.uk'])
    const player2Size = getListSize(['Donald', 65, 2020, 32])
    expect(player1Size).toEqual(3)
    expect(player2Size).toEqual(4)
  })
})
