import React, { memo } from 'react'
import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils';

export default memo(function AlbumCover(props) {

  const { info, size=130, width=100, bgp="-845px"} = props;

  return (
    <AlbumCoverWrapper info={info} size={size} width={width} bgp={bgp}>
      <div className="album-image" >
        <img src={getSizeImage(info.picUrl, size)} alt=""/>
        <a href="/#" className="cover sprite_cover"> </a>
        <a href="/#" className="play sprite_icon" title="播放"> </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
