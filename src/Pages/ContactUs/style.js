import styled from "styled-components";
import ColorPallete, { textColor } from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   .header {
      background-image: linear-gradient(to bottom, #1c1c1c, rgba(0, 0, 0, 0));
   }
   .contact-us {
      background-color: ${ColorPallete.pageBackgroundColor};
      padding-bottom: 10rem;
      .hero-section {
         position: relative;
         .hero-img {
            height: 560px;
            img {
            }
            &:after {
               content: "";
               width: 100%;
               height: 300px;
               background-image: linear-gradient(rgba(28, 28, 28, 0), rgb(28, 28, 28));
               position: absolute;
               bottom: 0;
               left: 0;
            }
         }

         .hero-content {
            color: #fff;
            font-size: 1.6rem;
            position: absolute;
            left: 50%;
            bottom: 3rem;
            transform: translateX(-50%);
            text-align: center;
            p {
               margin-top: 4rem;
            }
         }
      }
      .content-section {
         margin-top: 2rem;
         width: 864px;
         margin-left: auto;
         margin-right: auto;
         background-color: ${ColorPallete.menuBackgroundColor};
         color: #fff;
         font-size: 1.1rem;
         .contact-type {
            margin-bottom: 2rem;
            .col-8,
            .col-7 {
               padding: 3rem 3rem 0.5rem;
            }
            .icon {
               display: block;
               width: 21px;
               height: 21px;
               svg {
                  width: 100%;
                  height: 100%;
               }
            }
            h2 {
               font-weight: 400;
            }
            h3 {
               font-weight: 400;
            }
            .item-color-1 {
               margin-top: -1.5rem;
            }
            .faq {
               .questions {
                  .questions-icon {
                     width: 14px;
                     height: 14px;
                     display: block;
                     svg {
                        width: 100%;
                        height: 100%;
                     }
                  }
               }
            }
            .faq,
            .send-email {
               position: relative;
            }
            .faq:after,
            .send-email:after {
               content: "";
               position: absolute;
               width: 0.09px;
               top: 3rem;
               left: 0;
               bottom: 4.5rem;
               background-color: ${ColorPallete.contactUsBorder};
            }
         }
         .our-address {
            padding: 3rem 3rem 3rem;
            color: #fff;
            font-size: 1.4rem;
            position: relative;
            h3 {
               font-weight: 300;
            }
            &:before {
               content: "";
               position: absolute;
               height: 1px;
               top: 0;
               left: 3rem;
               right: 3rem;
               background-color: ${ColorPallete.contactUsBorder};
            }
         }
      }
   }
`;
export default Style;
