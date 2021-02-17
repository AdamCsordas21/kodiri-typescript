import {
  getFirstName,
  getFirstName2,
  getPersonalDetails,
} from '.'

describe('getFirstName function', () => {
  it('returns Boris when Johnson last name is provided', () => {
    const firstName = getFirstName({ firstName: 'Boris', lastName: 'Johnson' })
    expect(firstName).toEqual('Boris')
  })

  it('returns Donald when Trump last name is provided', () => {
    const firstName = getFirstName({ firstName: 'Donald', lastName: 'Trump' })
    expect(firstName).toEqual('Donald')
  })
})


describe('getFirstName2 function', () => {
  it('returns Boris when Johnson last name is provided', () => {
    const firstName = getFirstName2({ name: { first: 'Boris', last: 'Johnson' }, age: 55 })
    expect(firstName).toEqual('Boris')
  })

  it('returns Boris when last name Trump is provided', () => {
    const firstName = getFirstName2({ name: { first: 'Donald', last: 'Trump' }, age: 65 })
    expect(firstName).toEqual('Donald')
  })
})

describe('getPersonalDetails function', () => {
  it('returns the personal details of a Manchester United player', () => {
    const personalDetails = getPersonalDetails({ personal: { name: 'Paul Pogba', age: 27 }, position: 'midfielder' })
    expect(personalDetails).toEqual({ name: 'Paul Pogba', age: 27 })
  })
  
  it('returns the personal details of a Manchester United player', () => {
    const personalDetails = getPersonalDetails({ personal: { name: 'Marcus rashford', age: 23 }, position: 'forward' })
    expect(personalDetails).toEqual({ name: 'Marcus rashford', age: 23 })
  })
})
