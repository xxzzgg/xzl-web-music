import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  margin: 5px 20px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    .title {
      font-size: 20px;
      font-weight: normal;
      text-decoration: none;
    }
    .keywords{
      display: flex; 
      margin: 7px 0 0 20px;
      .item {
        .line {
        margin: 0 10px;
        color: #ccc;
      }
      :last-of-type span {
        display: none;
      } 
      }
    }
  }


  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`



// export const HeaderWrapper = styled.div` 
//   height: 33px;
//   border-bottom: 2px solid #C10D0C;
//   padding: 0 10px 4px 34px;
//   background-position: -235px -164px;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .left {
//     display: flex;
//     .title {
//       font-size: 20px;
//       font-weight: normal;
//       text-decoration: none;
//     }
//     .keywords {
//       margin: 7px 0 0 20px;
//       .line {
//         margin: 0 10px;
//         color: #ccc;
//       }
//       :last-of-type span {
//         display: none;
//       }
//     }
   
//   }


//   .right {
//     display: flex;
//     align-items: center;
//     .icon {
//       display: inline-block;
//       width: 12px;
//       height: 12px;
//       margin-left: 4px;
//       background-position: 0 -240px;
//     }
//   }

// `


