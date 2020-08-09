import React, { memo, useEffect, useRef, useCallback, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';

import {TopBannerWrapper,
        TopBannerLeft,
        TopBannerRight,
        TopBannerControl
      } from './style'

export default memo(function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.getIn(["recommend", "topBanners"])
    }
  }, shallowEqual);
  const dispatch = useDispatch();
  const bannersRef = useRef();


  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20");

  return (
  <TopBannerWrapper bgImage={bgImage}>
    <div className="banner wrap-v2">
    <TopBannerLeft>
      <Carousel effect="fade" autoplay dotPosition="bottom" ref={bannersRef} beforeChange={bannerChange}>
      {topBanners.map((item, index) => {
        return (
          <div className="image-item" key={item.imageUrl}>
            <img src={item.imageUrl} className="image" alt={item.imageUrl}/>
          </div>
        )
      })}
      </Carousel>
    </TopBannerLeft>
    <TopBannerRight>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    </TopBannerRight>
    <TopBannerControl>
      <button className="btn left" onClick={e => {bannersRef.current.prev()}}></button>
      <button className="btn right" onClick={e => {bannersRef.current.next()}}></button>
    </TopBannerControl>
    </div>
  </TopBannerWrapper>
  )
})