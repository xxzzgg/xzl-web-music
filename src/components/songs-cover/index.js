import React, { memo } from 'react'
import { getCount, getSizeImage } from '@/utils/format-utils'

import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {

  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover">
          <i className="erji"></i>
          <span className="count">{getCount(info.playCount)}</span>
          <i className="play"></i>
        </div>
      </div>

      <div className="cover-bottom">
        <span className="text">{info.name}</span>
      </div>
      <div className="cover-source">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
