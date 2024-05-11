import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   .home-page-hero {
      ul {
         min-height: 758px;
         position: relative;
         li {
            width: 100%;
            height: fit-content;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            &:nth-child(1) {
               z-index: 1;
            }
            .holder {
               position: relative;
               background-color: ${ColorPallete.pageBackgroundColor};
               height: 100%;
               .img-holder {
                  position: relative;
                  &:after {
                     content: "";
                     position: absolute;
                     right: 0;
                     bottom: 0;
                     background-image: linear-gradient(
                        to left,
                        ${ColorPallete.pageBackgroundColor},
                        transparent
                     );
                     width: 60%;
                     height: 100%;
                  }
                  &:before {
                     content: "";
                     position: absolute;
                     right: 0;
                     bottom: 0;
                     background-image: linear-gradient(
                        to top,
                        ${ColorPallete.pageBackgroundColor},
                        transparent
                     );
                     width: 100%;
                     height: 36%;
                  }
                  .left-dark {
                     position: absolute;
                     left: 0;
                     bottom: 0;
                     background-image: linear-gradient(
                        to right,
                        ${ColorPallete.pageBackgroundColor},
                        transparent
                     );
                     width: 30%;
                     height: 100%;
                  }
               }
               .hero-content {
                  width: 100%;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  font-size: 1.7rem;
                  .line-1 {
                     .title {
                        a {
                           color: ${ColorPallete.white};
                        }
                     }
                     .time {
                        font-size: 1.5rem;
                        a {
                           color: ${ColorPallete.black};
                           background-color: ${ColorPallete.headerBuyBackground};
                           padding: 5px 15px;
                           border-radius: 5rem;
                        }
                     }
                  }
                  .line-2 {
                     margin-top: 40px;
                     .watch {
                        i {
                           font-size: 16px;
                        }
                     }
                     .more-info {
                        i {
                           font-size: 16px;
                        }
                     }
                     .next-prev {
                        a {
                           position: relative;
                           padding: 7px 20px;
                           span {
                              display: inline-block;
                              width: 24px;
                              height: 24px;
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
export default Style;
