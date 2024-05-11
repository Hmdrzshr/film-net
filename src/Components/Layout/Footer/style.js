import styled from "styled-components";
import ColorPallete from "../../../AboutStyle/colorPallete";

export const Style = styled.div`
   .dynamic-footer {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      z-index: 999;
      transition: all 300ms;
      /* display: none; */
      background-color: ${ColorPallete.footerBackground};
      height: 55.4px;
      .menu {
         padding-right: 1rem;
         .go-top {
            a {
               display: inline-block;
               width: 16px;
               height: 16px;

               img {
                  object-fit: cover;
                  border-radius: 3px;
               }
            }
         }
         .links {
            h3 {
               font-weight: 300;
               font-size: 1.2rem;
            }
         }
      }
      .get-app {
         padding-left: 2rem;
         span {
            display: inline-block;
            width: 21px;
            height: 21px;
         }
         h3 {
            font-weight: 300;
            font-size: 1.4rem;
         }
      }
   }
   .footer {
      background-color: ${ColorPallete.footerBackground};
      padding-top: 3rem;
      font-size: 1rem;
      .info {
         h3 {
            font-weight: 400;
         }
         .logo a {
            display: block;
            width: 213px;
            height: auto;
         }
         .menu {
            gap: 85px;
         }
         .get-app {
            span {
               width: 28px;
               height: 28px;
            }
         }
      }
      .social-media {
         border-bottom: 1px solid #5e5e5e;
         padding: 4rem 0;
         line-height: 10px;
         .go-top a {
            display: block;
            padding: 7px 7px 3px 7px;
            border: 1px solid #fff;
            border-radius: 5px;
         }
         .media {
            border: 1px solid #fff;
            border-radius: 5px;
            a {
               padding: 4px 16px;
               border-right: 1px solid #fff;
               margin: 5px 0;
               &:nth-child(1) {
                  border-right: none;
               }
               img {
                  display: block;
                  width: 16px;
                  height: 16px;
               }
            }
         }
      }
      .copyright {
         .text {
            color: #8a8d8f;
            padding: 10px 0;
            font-size: 1.2rem;
         }
         .certificates {
            .icon {
               margin: 20px 8px;
               a {
                  img {
                     width: 48px;
                     height: 48px;
                  }
               }
            }
         }
      }
   }
`;
export default Style;
