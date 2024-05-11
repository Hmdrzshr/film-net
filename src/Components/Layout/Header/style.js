import styled from "styled-components";
import ColorPallete from "../../../AboutStyle/colorPallete";

export const Style = styled.div`
   .header {
      width: 100%;
      font-size: 1.2rem;
      padding: 3px 0;
      background-image: linear-gradient(to top, transparent, ${ColorPallete.pageBackgroundColor});
      transition: all 300ms;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      .logo {
         padding: 10px 0;
      }
      .menu {
         .movie,
         .serie {
            position: relative;
            ul {
               /* height: 0; */
               /* overflow: hidden; */
               color: ${ColorPallete.white};
               position: absolute;
               top: 39px;
               right: -7px;
               width: 400px;
               background-color: ${ColorPallete.menuBackgroundColor};
               padding-top: 12px;
               padding-bottom: 12px;
               padding-right: 15px;
               gap: 10px 25px;
               /* opacity: 0; */
               transition: all 400ms;

               li {
                  padding-right: 5px;
                  width: 96px;
                  &:hover {
                     background-color: rgba(255, 255, 255, 0.15);
                  }
                  h3 {
                     cursor: pointer;
                     display: inline-block;
                  }
               }
            }
            /* &:hover ul {
               opacity: 1;
               height: 174px;
            } */
         }
         .icon {
            font-size: 6px;
         }
      }
      .login {
         .search {
            .search-holder {
               width: 24px;
               height: 24px;
            }
         }
         .profile {
            .pro-holder {
               width: 32px;
               height: 32px;
            }
         }
      }
      h3 {
         font-weight: 400;
      }
   }
   .hidden {
      opacity: 0;
      height: 0;
      overflow: hidden;
   }
   .show {
      height: 174px;
      opacity: 1;
   }
`;
export default Style;
