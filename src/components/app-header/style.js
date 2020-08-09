import styled from 'styled-components';

export const HeaderWrapper = styled.div`

    height: 75px;
    background-color: #242424;
    font-size: 14px;
    .content {
      display: flex;
      justify-content: space-between;

      height: 70px;
    }
    .divide {
      height: 5px;
      background-color: #C20C0C;
    }
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;

  .select-list{
    display: flex;
    line-height:70px;

    .select-item {
      position: relative;

        a {
          display: block;
          padding: 0 20px;
          color: #ccc;
        }
        :last-of-type a {
          position: relative;
          ::after {
            position: absolute;
            content: "";
            width: 28px;
            height: 19px;
            background-image: url(${require("@/assets/img/sprite_01.png")});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }
        }

        &:hover a, a.active {
          color: #fff;
          background: #000;
          text-decoration: none;
        }
      
        .active .icon {
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          bottom: -1px;
          left: 50%;
          transform: translate(-50%, 0);
          background-position: -226px 0;
        }
      
    }
  }

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
`

// export const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
//   color: #ccc;
//   font-size: 12px;


//   .search {
//     width: 158px;
//     height: 32px;
//     border-radius: 16px;

//       input {
//         &::placeholder {
//           font-size:12px;
//         }
//       }
//   }
// `
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }


  .center {
    width: 90px;
    height: 32px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #4F4F4F;
    color: #ccc;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
    cursor: pointer;
    :hover {
      border: 1px solid #fff;
      color: #fff;
    }
  }

  .login {
    color: #787878;
    background-color: transparent;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`