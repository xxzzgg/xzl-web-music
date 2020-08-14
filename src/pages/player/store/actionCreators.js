import * as actionTypes from './constants';

import { getSongDetail } from '../../../services/player';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: currentSongIndex
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence: sequence
})
// 切换歌曲的action
/*
1. 先判断sequence为 0 1 2 播放顺序
2. 单曲循环和顺序播放 切换歌曲逻辑一致
3. 随机播放则为随机进行播放
4. 


*/ 
export const changeCurrentSongsAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const playList = getState().getIn(["player", "playList"]);
    // const currentSong = getState().getIn(["player", "currentSong"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1://随机
      currentSongIndex = Math.floor(Math.random()*playList.length)
      break
      default://顺序播放和单曲
      currentSongIndex += tag;
      if (currentSongIndex === playList.length) currentSongIndex = 0;
      if (currentSongIndex < 0) currentSongIndex = playList.length -1;
      // dispatch(changeCurrentSongIndexAction(currentSongIndex));
      break
    }
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));
    // dispatch()


  }
}





export const getSongDetailAction = (ids) => {


  return (dispatch, getState) => {
    //判断当前歌曲是否已经在playList
     const playList = getState().getIn(["player","playList"]);
     const songIndex = playList.findIndex(item => item.id === ids);
      let song = null;
    //等于 -1 在playList
      if (songIndex !== -1) {
        dispatch(changeCurrentSongIndexAction(songIndex));
        song = playList[songIndex];
        dispatch(changeCurrentSongAction(song));
        // dispatch(changePlayListAction(playList));
      }else {   
        // 不在playList中 当前ids不在playList的歌曲id 则需要根据ids 去请求歌曲添加到playList
          getSongDetail(ids).then((res) => {
          song = res.songs && res.songs[0];
          if (!song) return;
            // 这里只是用的Immutable的浅层转化，如果用了深层转化则可以直接使用set
          const newPlayList = [...playList];
          newPlayList.push(song);
          dispatch(changeCurrentSongAction(song));
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length -1));
  
        })
      }
  }
}
