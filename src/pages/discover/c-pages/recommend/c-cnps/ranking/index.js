import React, { memo } from 'react'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { RankingWrapper } from './style'
import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TopRanking from '@/components/top-ranking';
import { getTopListAction } from '../../store/actionCreators'
export default memo(function Ranking() {


  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getTopListAction(0));
      dispatch(getTopListAction(2));
      dispatch(getTopListAction(3));
    }
    , [dispatch])

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)


  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单" keywords={[]} />
      <div className="content">
        <TopRanking info={ upRanking } />
        <TopRanking info={ newRanking } />
        <TopRanking info={ originRanking } />
      </div>

    </RankingWrapper>
  )
})
