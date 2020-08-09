import styled from 'styled-components';


export const TopBannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;
    display: flex;
    position: relative;
  }
`

export const TopBannerLeft = styled.div`
  width: 730px;
  .image-item {
    height: 270px;
  
    .image{
      width: 100%;
    }
  }
`
export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
  position: relative;
  &:hover {
    text-decoration: none;
  }
  p{
    position: absolute;
    width: 254px;
    height: 16px;
    left:0;
    bottom: 5px;
    text-align: center;
    line-height: 16px;
    color: #8D8D8D;
  }
 
  
`

export const TopBannerControl = styled.div`
  position: absolute;
  height:50px;
  right:0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
    
    }


  .left {
    left: -68px;
    background-position: 0px -360px;
  }

  .right {
    right: -68px;
    background-position: 0px -508px;
  }
`