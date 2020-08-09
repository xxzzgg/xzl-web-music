import React, { memo, useEffect,useRef } from 'react'
import ThemeHeaderRecommend from '@/components/theme-header-recommend';
import AlbumCover from '@/components/album-cover';
import { AlbumWrapper,AlbumContent } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumsAction } from '../../store/actionCreators'
import { Carousel } from 'antd';



export default memo(function Albums(props) {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);

  const dispatch = useDispatch();

  const pageRef = useRef();
  useEffect(()=> {
    dispatch(getNewAlbumsAction(10))
  },[dispatch]);

  
 



  return (
    <AlbumWrapper>
      <ThemeHeaderRecommend title="新碟上架" keywords={[]} />
      <div className="content">
        <button className="arrow left sprite_02" onClick={ e => pageRef.current.prev()}></button>
        <div className="album">
                <Carousel dots={false} ref={pageRef}>
                  {
                    [0, 1].map(item => {
                      return (
                        <div key={item} className="page" >
                          {
                            newAlbums.slice(item*5, (item+1)*5).map((iten) => {
                              return(
                              <AlbumCover key={iten.id} 
                                          info={iten} 
                                          size={100}
                                          width={118}
                                          bgp="-570px">

                              </AlbumCover>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </Carousel>
        </div>

        <button className="arrow right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
