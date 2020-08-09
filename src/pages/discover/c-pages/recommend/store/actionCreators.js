import * as actionTypes from './constants';

import { getTopBanners, getHotRecommend, getNewAlbums, getTopList} from '@/services/recommend';

const changeToBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
  }
}


const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

// redux-thunk中定义的action函数
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then (res => {
      dispatch(changeToBannerAction(res));
    }) 
  
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then (res => {
      console.log(res);
      dispatch(changeHotRecommendAction(res));
    }) 
  
  }
}

export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then((res) => {
      switch(idx) {
        case 0:
          return dispatch(changeUpRankingAction(res));
        case 2:
          return dispatch(changeNewRankingAction(res));
        case 3:
          return dispatch(changeOriginRankingAction(res));
      default: 
        break;
      }
      
      
      
      
      // dispatch(changeTopListAction(res))
    })
  }
}