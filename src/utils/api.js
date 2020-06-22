import fetch from './fetch'

export function getGoodList(params) {
  return fetch({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

export function getCates(params) {
  return fetch({
    url: '/jd/getAllCates',
    method: 'GET',
    params
  })
}

export default {
  getGoodList,
  getCates
}
