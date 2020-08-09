import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend (limit) {
  return request({
    url: "/personalized",
    params: {
      limit: limit
    }
  })
}

export function getNewAlbums (limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}


export function getTopList (idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}