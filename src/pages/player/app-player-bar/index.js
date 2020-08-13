import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'

import { Slider } from 'antd';
import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils';
import { PlayerBarWrapper, PlayInfo, Operator, Control } from './style'

import { getSongDetailAction } from '../store/actionCreators'

export default memo(function AppPlayerBar(props) {
  //props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging,setIsChanging ] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // let { isPlaying = false, sequence = 0 } = props;
  const [sequence, setSequence] = useState(0);
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(1407551413))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);
  const audioRef = useRef()
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const songName = (currentSong && currentSong.name) || "未知";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration =  formatMinuteSecond(duration);
  const showCurrentTime = formatMinuteSecond(currentTime);
  //handle function 
  const playMusic = useCallback(() => {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    },[isPlaying])
//audio 的每次的时间改变时的回调
  const timeUpdate = (e) => {
    // console.log(e.target.currentTime);
   
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
      console.log(e.target.currentTime);
    }
    
  }
//移动中
  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    const  currentTime = value / 100 * duration / 1000;
    setCurrentTime(currentTime*1000);
    setProgress(value)
  }, [duration]);
//移动后
  const onSliderAfterChange = useCallback((value) => {
    const  currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    console.log(currentTime, value);
    setCurrentTime(currentTime*1000);
    setIsChanging(false);
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic]);
  return (
    <div>
      <PlayerBarWrapper className="sprite_player" >
        <div className="content">
          <Control isPlaying={isPlaying}>
            <button className="prev sprite_player"></button>
            <button className="play sprite_player" onClick={e => playMusic()}></button>
            <button className="next sprite_player"></button>
          </Control>
          <PlayInfo>
            <div className="image">
              <a href="/#">
                <img src={getSizeImage(picUrl, 35)} alt="" />
              </a>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{songName}</span>
                <a href="#/" className="singer-name">{singerName}</a>
              </div>
              <div className="progress">
                <Slider defaultValue={0} 
                        value={progress} 
                        onChange={sliderChange}
                        onAfterChange={onSliderAfterChange}
                />
                <div className="time">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="duration">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator sequence={sequence}>
            <div className="left">
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
            </div>
            <div className="right sprite_player">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop"></button>
              <button className="sprite_player btn playlist"></button>
            </div>
          </Operator>
        </div>
        <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
      </PlayerBarWrapper>
    </div>
  )
})
