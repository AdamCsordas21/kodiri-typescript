import {
  getFirstName,
  getFirstName2,
  getPersonalDetails,
  getMovie,
  getMovie2,
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

  it('returns Donald when last name Trump is provided', () => {
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

describe('getMovie function', () => {
  it('returns Terminator when searching james Cameron + 1984', () => {
    const query = { director: 'James Cameron', year: 1984 }
    const movie = getMovie(query)
    expect(movie).toEqual({ title: 'Terminator', score: 87.3 })
  })
})

describe('getMovie2 function', () => {
  it('returns Terminator when searching James Cameron + 1991', () => {
    const movie = getMovie2('James Cameron')
    expect(movie).toEqual({ title: 'Terminator', year: 1991, isGood: true })
  })
})
