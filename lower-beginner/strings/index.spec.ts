import {
  concatenate,
  concatenateTwo,
  concatenateThree,
  getSize,
  convertIntoSmallCase,
  convertIntoBigCase,
  trim,
} from '.'

describe('concatenate function', () => {
  it('concatenates two upper characters', () => {
    const result = concatenate('A', 'B')
    expect(result).toEqual('AB')
  })

  it('concatenates two lower characters', () => {
    const result = concatenate('a', 'b')
    expect(result).toEqual('ab')
  })

  it('concatenates two words', () => {
    const result = concatenateTwo('Hello', 'world')
    expect(result).toEqual('Hello world')
  })

  it('concatenates three words', () => {
    const result = concatenateThree('Hello', 'amazing', 'world')
    expect(result).toEqual('Hello amazing world')
  })
})

describe('getSize function', () => {
  it('returns 5 for "London"', () => {
    const result = getSize('London')
    expect(result).toEqual(6)
  })

  it('returns 6 for "England"', () => {
    const result = getSize('England')
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

describe('trim function', () => {
  [{
    it: 'removes spaces at the beginning of the email',
    email: ' adam@typescript.co.uk',
    result: 'adam@typescript.co.uk',
  }, {
    it: 'removes spaces at the end of the email',
    email: 'adam@typescript.co.uk ',
    result: 'adam@typescript.co.uk',
  }, {
    it: 'removes spaces at the beginning and at the end of the email',
    email: ' adam@typescript.co.uk ',
    result: 'adam@typescript.co.uk',
  }].forEach(scenario => {
    it(scenario.it, () => {
      const trimmedEmail = trim(scenario.email)
      expect(trimmedEmail).toEqual(scenario.result)
    })
  })
})
