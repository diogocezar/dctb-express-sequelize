clearconst request = require('supertest')
const { User } = require('../../src/models')
const app = require('../../src/app')
const truncate = require('../helpers/TruncateHelper')

describe('Create User Using Route', () => {
  beforeEach(async () => {
    await truncate()
  })
  it('should create user using route', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'Diogo Cezar',
        email: 'diogo123@diogocezar.com',
        password: '123123',
      })
    expect(response.status).toBe(200)
  })
})
