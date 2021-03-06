import {
  getFirstElement,
  getListSize,
  isListLong,
  getFirstOfSecondElement,
  reverseList,
} from '.'

describe('getFirstElement function', () => {
  it('returns the first fruit of a list', () => {
    const firstFruit = getFirstElement(['apple', 'orange', 'banana'])
    expect(firstFruit).toEqual('apple')
  })
  
  it('returns the first character of a list', () => {
    const firstCharacter = getFirstElement(['Boris', 'Donald', 'Bill'])
    expect(firstCharacter).toEqual('Boris')
  })
})

describe('getListSize function', () => {
  it('returns the length of a list of elements', () => {
    const player1Size = getListSize(['Boris', 35, 'boris@gmail.co.uk'])
    const player2Size = getListSize(['Donald', 21, 7, 10])
    expect(player1Size).toEqual(3)
    expect(player2Size).toEqual(4)
  })
})

describe('isListLong function', () => {
  it('returns true if the list has at least 3 elements', () => {
    const isLong = isListLong(['guinea pig', 'cat', 'dog'])
    expect(isLong).toEqual(true)
  })
  
  it('returns false if the list has less than 3 elements', () => {
    const isLong = isListLong(['lion', 'tiger'])
    expect(isLong).toEqual(false)
  })
})

describe('getFirstOfSecond function', () => {
  it('returns the first element of the second sub-array', () => {
    const cities = [['Manchester', 'London'], ['Budapest', 'Warsaw']]
    const planes = [['Boeing 737', 'Boeing 747', 'Boeing 777'], ['Airbus 320', 'Airbus 321 Neo', 'Airbus 380']]
    const firstOfSecondCities = getFirstOfSecondElement(cities)
    const firstOfSecondPlanes = getFirstOfSecondElement(planes)
    expect(firstOfSecondCities).toEqual('Budapest')
    expect(firstOfSecondPlanes).toEqual('Airbus 320')
  })
})

describe('reverseList function', () => {
  it('reverses the user details for Boris', () => {
    const reversedList = reverseList(['Boris', 55, false])
    expect(reversedList).toEqual([false, 55, 'Boris'])
  })
  
  it('reverses the user details for Donald', () => {
    const reversedList = reverseList(['Donald', 65, true])
    expect(reversedList).toEqual([true, 65, 'Donald'])
  })
})
