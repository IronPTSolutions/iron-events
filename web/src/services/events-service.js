import http from './base-api-service';

const list = () => {
  return http.get('/events')
    .then(response => response.data);
}

const get = (id) => {
  return http.get(`/events/${id}`)
    .then(response => response.data);
}

const create = (event) => {
  return http.post(`/events`, event)
    .then(response => response.data);
}

const remove = (id) => {
  return http.delete(`/events/${id}`)
    .then(response => response.data);
}

const update = (event) => {
  return http.put(`/events`, event)
    .then(response => response.data);
}

const service = {
  create,
  update,
  remove,
  list,
  get
}
export default service;
