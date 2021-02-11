import {
  checkEmail,
} from '.'

describe('checkMail', () => {
  it('determines wheher a player has an email address or not', () => {
    const resultWithEmail = checkEmail('Boris', 'boris@england.co.uk')
    const resultWithoutEmail = checkEmail('Boris')
    expect(resultWithEmail).toEqual('Email provided')
    expect(resultWithoutEmail).toEqual('Email not provided')
  })
})
