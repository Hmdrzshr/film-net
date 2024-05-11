import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

const Style = styled.div`
   .home-page {
      background-color: ${ColorPallete.pageBackgroundColor};
      padding-bottom: 5rem;
      .content-section {
         position: relative;
         z-index: 3;
         margin-top: -5rem;
         .vijhe {
            .movie-render-by-title {
               h2 {
                  padding-right: 0.5rem;
                  font-size: 2.6rem;
                  font-weight: 400;
                  color: ${ColorPallete.white};
               }
               ul {
                  margin-top: 1.5rem;
                  li {
                     width: calc(20% - 16px);
                     height: 135px;
                     overflow: hidden;
                     .img-holder {
                        position: relative;
                        height: 100%;
                        &:before {
                           content: "";
                           opacity: 0;
                           position: absolute;
                           width: 100%;
                           height: 100%;
                           background-color: rgba(0, 0, 0, 0.7);
                           transition: opacity 500ms;
                        }
                        img {
                           object-fit: cover;
                        }
                        .item-content {
                           opacity: 0;
                           position: absolute;
                           top: 15px;
                           right: 15px;
                           transition: opacity 500ms;
                           z-index: 2;
                           h3 {
                              font-size: 1.5rem;
                              font-weight: 300;
                              color: ${ColorPallete.white};
                           }
                        }
                     }
                     &:hover {
                        .img-holder:before,
                        .img-holder .item-content {
                           opacity: 1;
                        }
                     }
                  }
               }
            }
         }
         .genre {
            margin-top: 5rem;
            .movie-render-by-genre {
               position: relative;
               h2 {
                  padding-right: 0.5rem;
                  font-size: 2.6rem;
                  font-weight: 400;
                  color: ${ColorPallete.white};
               }
               ul {
                  margin-top: 1.5rem;
                  overflow-x: scroll;
                  scroll-behavior: smooth;
                  &::-webkit-scrollbar {
                     display: none;
                  }
                  li {
                     cursor: pointer;
                     flex-shrink: 0;
                     position: relative;
                     .img-holder {
                        overflow: hidden;
                        width: 234px;
                        height: 135px;
                     }
                     h3 {
                        margin-top: 1rem;
                        padding-right: 0.5rem;
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: ${ColorPallete.white};
                     }
                  }
               }
               .scroll-left {
                  position: absolute;
                  left: -2rem;
                  bottom: 0rem;
                  width: 2rem;
                  height: 20rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2rem;
                  background-color: transparent;
                  color: #fff;
                  cursor: pointer;
               }
               .scroll-right {
                  position: absolute;
                  right: -2rem;
                  bottom: 0rem;
                  width: 2rem;
                  height: 20rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2rem;
                  background-color: transparent;
                  color: #fff;
                  cursor: pointer;
               }
            }
         }
         .bartarin,
         .soon {
            .movie-render-by-title-type-2 {
               position: relative;
               margin-top: 5rem;
               h2 {
                  padding-right: 0.5rem;
                  font-size: 2.6rem;
                  font-weight: 400;
                  color: ${ColorPallete.white};
               }
               ul {
                  margin-top: 1.5rem;
                  overflow-x: scroll;
                  scroll-behavior: smooth;
                  &::-webkit-scrollbar {
                     display: none;
                  }
                  li {
                     width: calc(12.5% - 16px);
                     height: 200px;
                     overflow: hidden;
                     flex-shrink: 0;
                     .img-holder {
                        position: relative;
                        height: 100%;
                        &:before {
                           content: "";
                           opacity: 0;
                           position: absolute;
                           width: 100%;
                           height: 100%;
                           background-color: rgba(0, 0, 0, 0.7);
                           transition: opacity 500ms;
                        }
                        img {
                           object-fit: cover;
                        }
                        .item-content {
                           opacity: 0;
                           position: absolute;
                           top: 25px;
                           right: 15px;
                           transition: opacity 500ms;
                           z-index: 2;
                           h3 {
                              font-size: 1.5rem;
                              font-weight: 300;
                              color: ${ColorPallete.white};
                           }
                        }
                     }
                     &:hover {
                        .img-holder:before,
                        .img-holder .item-content {
                           opacity: 1;
                        }
                     }
                  }
               }
               .scroll-left {
                  position: absolute;
                  left: -2rem;
                  bottom: 0rem;
                  width: 2rem;
                  height: 20rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2rem;
                  background-color: transparent;
                  color: #fff;
                  cursor: pointer;
               }
               .scroll-right {
                  position: absolute;
                  right: -2rem;
                  bottom: 0rem;
                  width: 2rem;
                  height: 20rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2rem;
                  background-color: transparent;
                  color: #fff;
                  cursor: pointer;
               }
            }
         }
      }
   }
`;
export default Style;
