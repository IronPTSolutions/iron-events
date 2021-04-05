import http from './base-api-service';

const list = (search) => http.get('/events', { params: { search } })

const get = (id) => http.get(`/events/${id}`)

const create = (event) => {
  const data = new FormData()

  Object.keys(event).forEach(key => {
    data.append(key, event[key])
  })

  http.post(`/events`, data)
}

const remove = (id) => http.delete(`/events/${id}`)

const update = (event) => http.put(`/events/${event.id}`, event)

const service = {
  create,
  update,
  remove,
  list,
  get
}

export default service;
