import {
  getFirstName,
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
