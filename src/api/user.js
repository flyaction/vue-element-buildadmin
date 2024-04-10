import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/index/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/index/index',
    method: 'get',
    headers: {
      'batoken': token
    }
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/index/logout',
    method: 'post'
  })
}
