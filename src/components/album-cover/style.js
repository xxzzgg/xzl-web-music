import styled from 'styled-components';



export const AlbumCoverWrapper = styled.div`
  width:${props => props.width + "px"};

  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
      /* &:hover +a{
        display: block;
      } */

      &:hover ~a{
        display: block;
      }
    }


    .play {
      display: none;
      position: absolute;
      width: 22px;
      height: 22px;
      right: 25px;
      bottom: 5px;
      background-position: 0 -85px;
      &:hover {
        display: block;
        background-position: 0 -110px;
      }
    }

  }  

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }

`

