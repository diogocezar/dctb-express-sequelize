const { User } = require('../../src/models')

describe('Create User', () => {
  it('should create user when passed valid attributes', async () => {
    const user = await User.create({
      name: 'Diogo',
      email: 'diogo@diogocezar.com',
      password_hash: '123123',
    })
    console.log(user)
    expect(user.email).toBe('diogo@diogocezar.com')
  })
})
