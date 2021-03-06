import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sys-user/info',
    method: 'get',
    headers: { Authorization: token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
