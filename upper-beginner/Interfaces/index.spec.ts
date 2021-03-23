import {
  getFirstName,
  getFirstName2,
  getPersonalDetials,
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
  it('returns Boris when Johonson last name is provided', () => {
    const firstName = getFirstName2({ name: { firstName: 'Boris', lastName: 'Johnson' }, age: 55 })
    expect(firstName).toEqual('Boris')
  })
  
  it('returns Donald when last name Trump is provided', () => {
    const firstName = getFirstName2({ name: { firstName: 'Donald', lastName: 'Trump' }, age: 65 })
    expect(firstName).toEqual('Donald')
  })
})

describe('getPersonalDetails', () => {
  it('returns the personal details of a Manchester United player', () => {
    const personalDetails = getPersonalDetials({ personal: { name: 'Paul Pogba', age: 27 }, position: 'midfielder' })
    expect(personalDetails).toEqual({ name: 'Paul Pogba', age: 27 })
  })
})
