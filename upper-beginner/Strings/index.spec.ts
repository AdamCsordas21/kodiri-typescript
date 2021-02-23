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
    const result = concatenateTwo('Manchester', 'United')
    expect(result).toEqual('Manchester United')
  })
  
  it('concatenates three words', () => {
    const result = concatenateThree('Glory', 'Glory', 'ManUnited')
    expect(result).toEqual('Glory Glory ManUnited')
  })
})

describe('getSize function', () => {
  it('returns 6 for "London"', () => {
    const result = getSize('London')
    expect(result).toEqual(6)
  })
  
  it('returns 7 for "England"', () => {
    const result = getSize('England')
    expect(result).toEqual(7)
  })
})

describe('case function', () => {
  it('converts all the characters of a word into small case', () => {
    const sentence = 'Glory, glory MANUNITED'
    const expected = 'glory, glory manunited'
    const sentence2 = 'RED Devils'
    const expected2 = 'red devils'
    expect(convertIntoSmallCase(sentence)).toEqual(expected)
    expect(convertIntoSmallCase(sentence2)).toEqual(expected2)
  })
  
  it('converts all the characters of a word into big case', () => {
    const sentence = 'Glory, glory MANUNITED'
    const expected = 'GLORY, GLORY MANUNITED'
    const sentence2 = 'GLORY, GLORY manunited'
    const expected2 = 'GLORY, GLORY MANUNITED'
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
