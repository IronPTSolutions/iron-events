const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
const mongoose = require('mongoose')

afterAll(() => {
  mongoose.connection.close();
})

it('get all events', async (done) => {
  const res = await request.get('/api/events')

  expect(res.status).toBe(200)
  done()
})

it('create user', async (done) => {
  const res = await request.post('/api/users').send({
    name: 'Alex',
    password: '123456789A',
    email: 'alex@alex.com',
  })

  expect(res.status).toBe(201)

  const id = res.body.id

  const res2 = await request.get(`/api/users/${id}`)

  expect(res2.status).toBe(200)
  expect(res2.body.name).toBe('Alex')
  expect(res2.body.password).toBe(undefined)

  done()
})

it('create user, missing parameter', async (done) => {
  const res = await request.post('/api/users').send({
    password: '123456789A',
    email: 'alex@alex.com',
  })

  expect(res.status).toBe(400)
  done()
})
