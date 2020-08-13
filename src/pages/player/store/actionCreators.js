import * as actionTypes from './constants';

import { getSongDetail } from '../../../services/player';


const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong
})

export const getSongDetailAction = (ids) => {


  return (dispatch) => {
    
    let song = null;
    getSongDetail(ids).then((res) => {
      console.log(res);
      song = res.songs && res.songs[0];
        if (!song) return;
      dispatch(changeCurrentSongAction(song));
    })
    
  }
}