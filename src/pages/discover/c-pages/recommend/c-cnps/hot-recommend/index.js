import React, { memo,useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ThemeHeaderRecommend from '@/components/theme-header-recommend';
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators'


export default memo(function HotRecommend() {

  const dispatch = useDispatch();
  const {hotRecommends} = useSelector((state) => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)


  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch])



  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}>
      </ThemeHeaderRecommend>
      <div className="recommend-list">
      {hotRecommends.map((item,index) => {
            return (
              <SongsCover key={item.id} info={item}></SongsCover>
            )
          })}
      </div>
    </HotRecommendWrapper>
  )
})
