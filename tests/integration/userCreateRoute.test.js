const { User } = require('../../src/models')
const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../helpers/TruncateHelper')

describe('Create User Using Route', () => {
  beforeEach(async () => {
    await truncate
  })
  it('should create user using route', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'Diogo Cezar',
        email: 'diogo@diogocezar.com',
        password_hash: '123123',
      })
    expect(response.status).toBe(200)
  })
})
