import {
  concatenate,
  concatenateTwo,
  concatenateThree,
  getSize,
  convertIntoSmallCase,
  convertIntoBigCase,
} from './.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    // when
    const result = concatenate('A', 'B')
    // then
    expect(result).toEqual('AB')
  })

  it('concatenates two lower characters', () => {
    // when
    const result = concatenate('a', 'b')
    // then
    expect(result).toEqual('ab')
  })

  it('concatenates two words', () => {
    // when
    const result = concatenateTwo('Hello', 'world')
    // then
    expect(result).toEqual('Hello world')
  })

  it('concatenates three words', () => {
    // when
    const result = concatenateThree('Hello', 'amazing', 'world')
    // then
    expect(result).toEqual('Hello amazing world')
  })
})

describe('getSize function', () => {
  it('returns 5 for "London"', () => {
    // when
    const result = getSize('London')
    // then
    expect(result).toEqual(6)
  })

  it('returns 6 for "England"', () => {
    // when
    const result = getSize('England')
    // then
    expect(result).toEqual(7)
  })
})

describe('case function', () => {
  it('converts all the characters of a word into small case', () => {
    const sentence = 'It\'s raining in London'
    const expected = 'it\'s raining in london'
    
    const sentence2 = 'LONDON is my CITY'
    const expected2 = 'london is my city'
    
    expect(convertIntoSmallCase(sentence)).toEqual(expected)
    expect(convertIntoSmallCase(sentence2)).toEqual(expected2)
  })
  
  it('converts all the characters of a word into big case', () => {
    const sentence = 'It\'s raining in London'
    const expected = 'IT\'S RAINING IN LONDON'
    
    const sentence2 = 'London is my city'
    const expected2 = 'LONDON IS MY CITY'
    
    expect(convertIntoBigCase(sentence)).toEqual(expected)
    expect(convertIntoBigCase(sentence2)).toEqual(expected2)
  })
})
