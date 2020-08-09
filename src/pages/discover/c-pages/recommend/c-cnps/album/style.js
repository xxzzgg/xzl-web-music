import styled from 'styled-components';

export const AlbumWrapper = styled.div`

  .content {
    display: flex;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 0 auto;
    width: 690px;
    align-items: center;
    .arrow {
    
      height: 20px;
      width: 20px;
    
      cursor: pointer;
      &.left {
        margin: 0 5px;
        background-position:-265px -77px;
        &:hover {
          background-position: -285px -77px;
        }
      }
      &.right {
        margin: 0 8px;
        background-position: -305px -77px;

        &:hover {
          background-position: -325px -77px;
        }
      }
    }

    .album {
      width: 640px;
      height: 150px;
      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }
      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }

    }
  }
`

