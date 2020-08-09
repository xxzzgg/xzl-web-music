import React, { memo } from 'react'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { RankingWrapper } from './style'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators'
export default memo(function Ranking() {


  const dispatch = useDispatch();

  useEffect(
    () => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }
  ,[dispatch])
 
  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend","upRanking"]),
    newRanking:state.getIn(["recommend","newRanking"]),
    originRanking:state.getIn(["recommend","originRanking"]),
  }))


  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单" keywords={[]} />
      
    </RankingWrapper>
  )
})
