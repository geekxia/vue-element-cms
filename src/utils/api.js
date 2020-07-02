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

export function articleCreate(data) {
  return fetch({
    url: '/good/create',
    method: 'POST',
    data
  })
}

export function getAds(params) {
  return fetch({
    url: '/ad/list',
    method: 'GET',
    params
  })
}
export function createAd(data) {
  return fetch({
    url: '/ad/create',
    method: 'POST',
    data
  })
}

export function deleteAd(params) {
  return fetch({
    url: '/ad/del',
    method: 'GET',
    params
  })
}

export default {
  getGoodList,
  getCates,
  addGood,
  articleCreate,
  getAds,
  createAd,
  deleteAd
}
