import {
  getFirstElement,
  getListSize,
  isListLong,
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

describe('getListSize', () => {
  it('returns the length of a list of element', () => {
    const player1Size = getListSize(['Boris', 55, 'boris@england.co.uk'])
    const player2Size = getListSize(['Donald', 65, 2020, 2021])
    expect(player1Size).toEqual(3)
    expect(player2Size).toEqual(4)
  })
})

describe('isListLong function', () => {
  it('returns true if the list has at least 3 elements', () => {
    const isLong = isListLong(['guinea pig', 'lion', 'wolf'])
    expect(isLong).toEqual(true)
  })
  
  it('returns false if the list has less than 3 elements', () => {
    const isLong = isListLong(['cat', 'dog'])
    expect(isLong).toEqual(false)
  })
})
