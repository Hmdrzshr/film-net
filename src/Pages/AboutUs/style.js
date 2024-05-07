import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   .about-us {
      background-color: ${ColorPallete.pageBackgroundColor};
      padding-bottom: 10rem;
      .hero-section {
         position: relative;
         .hero-img {
            height: 560px;
            position: relative;
            &:before {
               content: "";
               position: absolute;
               left: 0;
               bottom: 0;
               width: 100%;
               height: 296px;
               background-image: linear-gradient(rgba(28, 28, 28, 0), rgb(28, 28, 28));
            }
            img {
               object-fit: cover;
            }
         }
         .hero-content {
            color: ${ColorPallete.white};
            font-size: 1.5rem;
            text-align: center;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: -8rem;
            p {
               margin-top: 4rem;
               text-align: right;
               line-height: 4rem;
               font-size: 1.6rem;
               padding-left: 1rem;
            }
         }
      }
      .content-section {
         .video {
            margin-top: 10rem;
            height: 486px;
            video {
               width: 100%;
               height: 100%;
            }
         }
         .history {
            p {
               color: ${ColorPallete.white};
               margin-top: 4rem;
               text-align: right;
               line-height: 4rem;
               font-size: 1.6rem;
               padding-left: 1rem;
            }
         }
         .our-app {
            margin-top: 10rem;
            color: ${ColorPallete.white};
            font-size: 1.25rem;
            position: relative;
            h1 {
               text-align: center;
            }
            p {
               margin-top: 3rem;
               text-align: right;
               line-height: 2.5rem;
               font-size: 1.6rem;
               padding-left: 1rem;
            }
            svg {
               display: inline-block;
               width: 100%;
               height: 100%;
            }
            .link-icon {
               display: inline-block;
               width: 21px;
               height: 21px;
            }
            .intro {
               span {
                  display: inline-block;
                  width: 24px;
                  height: 24px;
               }
            }
            h2 {
               font-size: 1.6rem;
               font-weight: 400;
            }
            a {
               padding: 1.5rem 1.5rem;
               border: 1px solid ${ColorPallete.contactUsBorder};
               border-radius: 1rem;
               width: 178px;
               height: 58px;
               transition: all 500ms;
               &:hover {
                  background-color: #363636;
                  border-color: #fff;
               }
            }
            .item-links {
               width: 500px;
               flex-wrap: wrap;
               padding-right: 4rem;
               margin-top: 2rem;
               h2 {
                  font-size: 1.4rem;
                  font-weight: 400;
               }
            }
            .smart-tv {
               margin-top: 9.5rem;
            }
            .mg-4 {
               margin-top: 4rem;
            }
            .app-img {
               width: 412px;
               height: 473px;
               position: absolute;
               left: 0;
               bottom: 32rem;
            }
         }
         .our-media {
            margin-top: 10rem;
            h2 {
               font-size: 1.6rem;
               font-weight: 400;
            }
            svg {
               display: inline-block;
               width: 100%;
               height: 100%;
            }
            .link-icon {
               display: inline-block;
               width: 16px;
               height: 16px;
            }
            .links {
               margin-right: 2rem;
               a {
                  padding: 1.5rem 1.5rem;
                  background-color: rgba(143, 143, 143, 0.5);
                  border-radius: 1rem;
                  width: 258px;
                  height: 74px;
                  transition: all 500ms;
                  &:hover {
                     background-color: rgba(143, 143, 143, 0.4);
                     border-color: #fff;
                  }
               }
            }
            h1 {
               text-align: center;
               font-size: 2.4rem;
               font-weight: 600;
               margin-top: 5.5rem;
               color: ${ColorPallete.white};
            }
            .media {
               margin-top: 3rem;
               border: 1px solid #fff;
               border-radius: 5px;
               width: 197px;
               height: 26px;
               margin-left: auto;
               margin-right: auto;
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
      }
   }
   .about-us-container {
      width: 864px;
      margin-left: auto;
      margin-right: auto;
   }
`;
export default Style;
