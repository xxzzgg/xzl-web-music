import React, { memo} from 'react'
import TopBanner from './c-cnps/top-banner';
import HotRecommend from './c-cnps/hot-recommend';
import Ranking from './c-cnps/ranking';
import Album from './c-cnps/album';
import { RecommendWrapper,
         RecommendLeft,
         RecommendRight,
         Content} from './style'

function ZLRecommend(props) {

  return (
      <RecommendWrapper>
          <TopBanner />
          <Content>
            <RecommendLeft>
              <HotRecommend>
              </HotRecommend>
              <Ranking>
              </Ranking>
              <Album>
              </Album>
            </RecommendLeft>
            <RecommendRight>
              <div></div>
            </RecommendRight>
          </Content>
      </RecommendWrapper>


  )
}
export default memo(ZLRecommend);





// import React, { memo, useEffect } from 'react'
// // import request from '@/services/request';
// import { connect } from 'react-redux';
// import { getTopBannerAction } from './store/actionCreators'

// function ZLRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners])


//   return (
//     <div>
//       Recommend{topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommend.topBanners
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })


// export default connect(mapStateToProps, mapDispatchToProps)(memo(ZLRecommend));

