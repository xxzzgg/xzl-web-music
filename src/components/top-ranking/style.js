import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  .header {
    display: flex;
    height: 80px;

    margin-bottom: 15px;

    .image {
      position: relative;
      
      .image-cover {
        /* background-position: 0 0; */
        height: 80px;
        width: 80px;
      }
    }


    .info {
      width: 116px;
      height: 51px;
      .title {
        color: #333;
        font-size: 14px;
      }
  
     
      margin: 0 10px;
      .btn {
        margin: 10px;
        

        .play {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background-position: -267px -205px;
          cursor: pointer;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .favor {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background-position: -300px -205px;
          cursor: pointer;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }


    
  }



    .list {

      .list-item:nth-child(odd)  {
        background-color: #eed;
      }

    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      :nth-child(-n+3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 5px;
        font-size: 16px;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
            &:hover {
              background-position: -21px -700px;
            }
          }

          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -290px;
            }
          }
        }
      }

      

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }


  .footer {
    display: flex;
    justify-content: flex-end;
    margin-right: 32px;
    a:hover  {
      
     color: #000;
    }
  }

` 

