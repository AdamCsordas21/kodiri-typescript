import {
  checkEmail,
} from '.'

describe('checkEmail', () => {
  it('determines whether a player has an emaail address or not', () => {
    const resultWithEmail = checkEmail('Boris', 'boris@england.co.uk')
    const resultWithoutEmail = checkEmail('Boris')
    expect(resultWithEmail).toEqual('Email provided')
    expect(resultWithoutEmail).toEqual('Email not provided')
  })
})