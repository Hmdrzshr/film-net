import styled from "styled-components";

export const Style = styled.div`
   .header {
      width: 100%;
      font-size: 1.2rem;
      padding: 3px 0;
      background-image: linear-gradient(to top, transparent, transparent, #000);
      transition: all 300ms;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      .logo {
         padding: 10px 0;
      }
      .menu {
         .movie {
            position: relative;
            .hide-menu {
               width: 45px;
               height: 20px;
               background-color: transparent;
               position: absolute;
               display: none;
               ul {
                  display: none;
                  /* height: 0; */
                  color: #fff;
                  position: absolute;
                  top: 17px;
                  right: -5px;
                  width: 400px;
                  background-color: #292929;
                  padding-top: 12px;
                  padding-bottom: 12px;
                  padding-right: 15px;
                  gap: 10px 25px;
                  /* transition-duration: 250ms;
                  transition-timing-function: ease;
                  transition-delay: 0s;
                  transition-property: height; */

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
            }

            &:hover .hide-menu {
               display: flex;
            }
            &:hover .hide-menu ul {
               display: flex;
               /* height: auto; */
            }
         }
         .serie {
            position: relative;
            transition: all 2s;
            .hide-menu {
               width: 45px;
               height: 20px;
               background-color: transparent;
               position: absolute;
               display: none;
               ul {
                  color: #fff;
                  position: absolute;
                  display: none;
                  top: 17px;
                  right: -5px;
                  width: 400px;
                  background-color: #292929;
                  padding-top: 12px;
                  padding-bottom: 12px;
                  padding-right: 15px;
                  gap: 10px 25px;
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
            }
            &:hover .hide-menu {
               display: flex;
            }
            &:hover .hide-menu ul {
               display: flex;
            }
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
`;
export default Style;
