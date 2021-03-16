const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
const mongoose = require('mongoose')

afterAll(() => {
  mongoose.connection.close();
})

it('Authentication OK', async (done) => {
  const res = await request.get('/api/events').set('Authorization', 'APIKEY kjsdfnkjasdnakjdnaskjdnaskjdnaskjdnaskjdnas12jdn')

  expect(res.status).toBe(200)
  done()
})

it('Authentication KO', async (done) => {
  const res = await request.get('/api/events')

  expect(res.status).toBe(401)
  done()
})
