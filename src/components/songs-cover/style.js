import styled from 'styled-components';

export  const SongsCoverWrapper = styled.div`
    width: 140px;
    height: 204px;
    margin: 5px 20px;
    
  .cover-top {
    border: 1px solid #d3d3d3;
    position: relative;
    .cover {
      background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat 0 -537px;
      width:140px;
      height: 27px;
      position: absolute;
      left:0px;
      bottom: 0px;
      padding: 5px;

      .erji {
        float: left;
        background: url(${require("@/assets/img/sprite_icon.png")}) no-repeat 0 -22px;;
        width: 14px;
        height: 11px;
        margin: 0 5px;
      }
      .play {
        float: right;
        background: url(${require("@/assets/img/sprite_icon.png")}) no-repeat 0 -60px;;
        width: 16px;
        height: 17px;
        margin-right: 5px;
        
      }
      .count {
        color: #ccc;
       
      }
    }
  }

  .cover-bottom {
    width: 140px;

    .text {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .cover-source{ 
    font-size: 12px;
    color: #666;
  }

`