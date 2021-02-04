import {
  concatenate,
  concatenateTwo,
  concatenateThree,
  getSize,
  convertIntoLowCase,
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
    const result = concatenateTwo('Hello', 'World')
    expect(result).toEqual('Hello World')
  })

  it('concatenates three words', () => {
    const result = concatenateThree('Hello', 'amazing', 'World')
    expect(result).toEqual('Hello amazing World')
  })
})

describe('get size function', () => {
  it('returns 5 for "Boris"', () => {
    const result = getSize('Boris')
    expect(result).toEqual(5)
  })

  it('returns 6 for "Donald', () => {
    const result = getSize('Donald')
    expect(result).toEqual(6)
  })
})

describe('case function', () => {
  it('converts all the characters of a word into small case', () => {
    const sentence = 'It\'s raining in London'
    const expected = 'it\'s raining in london'
    const sentence2 = 'London is my City'
    const expected2 = 'london is my city'
    expect(convertIntoLowCase(sentence)).toEqual(expected)
    expect(convertIntoLowCase(sentence2)).toEqual(expected2)
  })

  it('converts all the characters of a word in to big case', () => {
    const sentence = 'It\'s raining in London'
    const expected = 'IT\'S RAINING IN LONDON'
    const sentence2 = 'london is my city'
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
    result: 'adam@typescript.co.uk'
  }].forEach(scenario => {
    it(scenario.it, () => {
      const trimmmedEmail = trim(scenario.email)
      expect(trimmmedEmail).toEqual(scenario.result)
    })
  })
})
