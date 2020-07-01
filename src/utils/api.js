import fetch from './fetch'

export function getGoodList(params) {
  return fetch({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

// 获取所有品类
export function getCates(params) {
  return fetch({
    url: '/good/cates',
    method: 'GET',
    params
  })
}

export function addGood(data) {
  return fetch({
    url: '/good/add',
    method: 'POST',
    data
  })
}

export default {
  getGoodList,
  getCates,
  addGood
}
