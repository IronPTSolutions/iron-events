import http from './base-api-service';

export const login = (email, password) => {
  return http.post('/login', { email, password })
    .then(response => response.data)
}

export const register = (user) => {
  return http.post('/users', user)
    .then(response => response.data)
}

export const logout = () => http.post('/logout')
