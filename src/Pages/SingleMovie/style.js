import styled from "styled-components";
import ColorPallete, { textColor } from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
   }
   .single-movie-page {
      background-color: ${ColorPallete.pageBackgroundColor};
      padding-bottom: 2rem;
      .single-hero {
         min-height: 700px;
         position: relative;
         .poster-holder {
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
         .hero-movie-info {
            position: absolute;
            width: 100%;
            /* height: 100%; */
            top: 110px;
            right: 0;
            color: #fff;
            .hero-movie-content {
               padding: 0 1rem;
               .translated-title {
                  font-size: 1.6rem;
                  .add-to-list {
                     width: 40px;
                     height: 40px;
                     cursor: pointer;
                     position: relative;
                     svg {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                     }
                  }
               }
               .english-title {
                  margin-top: -1rem;
                  font-family: Roboto, sans-serif;
                  font-size: 1.1rem;
               }
               .movie-score {
                  font-family: Roboto, sans-serif;
                  /* margin-top: 0.7rem; */
                  font-weight: 500;
                  .vote {
                     svg {
                        width: 1.3rem;
                        height: 1.3rem;
                     }
                     span {
                        font-size: 1.5rem;
                        font-weight: bold;
                     }
                  }
                  .imdb-score {
                     /* align-items: baseline; */
                     .imdb-link {
                        display: inline-block;
                        height: 13.9px;
                        .imdb-logo {
                           display: inline-block;
                           width: 3.2rem;
                           height: 13.9px;
                           svg {
                              width: 100%;
                              height: 100%;
                           }
                        }
                     }
                     .imdb-vote {
                        height: fit-content;
                        font-size: 1.5rem;
                        font-weight: bold;
                     }
                  }
               }
               .age {
                  h2 {
                     font-size: 1.4rem;
                     font-weight: 400;
                  }
               }
               .movie-director {
                  margin-top: 1rem;
                  .static {
                     font-weight: 400;
                  }
                  .dynamic {
                     font-family: Roboto, sans-serif;
                     height: fit-content;
                  }
               }
               .movie-actors {
                  margin-top: -1rem;
                  .static {
                     font-weight: 400;
                  }
                  .dynamic {
                     font-family: Roboto, sans-serif;
                     height: fit-content;
                  }
               }
               .time-production {
                  margin-top: 1rem;
                  h2 {
                     font-size: 1.4rem;
                     font-weight: 400;
                  }
                  .movie-subtitle {
                     .sub-icon {
                        display: inline-block;
                        width: 1.7rem;
                        svg {
                           width: 100%;
                           height: 100%;
                        }
                     }
                  }
                  .movie-tranlation {
                     i {
                        font-size: 1.5rem;
                     }
                  }
               }
               .movie-genres {
                  margin-top: 0.5rem;
                  h2 {
                     font-size: 1.4rem;
                     padding: 0.5rem 1.5rem;
                     background-color: rgb(66, 66, 66);
                     border-radius: 25px;
                     font-weight: 500;
                  }
               }
               .movie-buttons {
                  margin-top: 2.5rem;
                  .preview-watch {
                     padding: 1.2rem 2rem;
                     background-color: rgb(66, 66, 66);
                  }
                  .movie-like {
                     svg {
                        fill: transparent;
                     }
                  }
                  .movie-unlike {
                     svg {
                        fill: transparent;
                     }
                  }
               }
               .movie-overview {
                  margin-top: 50px;

                  h2 {
                     font-weight: 500;
                     font-size: 2.5rem;
                  }
                  p {
                     width: 600px;
                     font-size: 1.5rem;
                     line-height: 2.5rem;
                     font-weight: 300;
                  }
               }
            }
         }
      }

      .movie-characters {
         position: relative;
         margin-top: 12rem;
         h2 {
            color: #fff;
            font-weight: 500;
            font-size: 2.5rem;
         }
         ul {
            overflow-x: scroll;
            scroll-behavior: smooth;
            &::-webkit-scrollbar {
               display: none;
            }
            li {
               padding: 1rem;
               background-color: ${ColorPallete.menuBackgroundColor};
               width: 193px;
               height: 80px;
               flex-shrink: 0;
               .img-holder {
                  margin-left: 1rem;
                  width: 48px;
                  height: 64px;
                  img {
                     object-fit: cover;
                  }
               }
               .people-info {
                  justify-content: space-around;
                  height: 60px;
               }
            }
         }
         .scroll-left {
            position: absolute;
            left: -2rem;
            bottom: 0rem;
            width: 2rem;
            height: 7.5rem;
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
            height: 7.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            background-color: transparent;
            color: #fff;
            cursor: pointer;
         }
      }
      .movie-similar {
         margin-top: 5rem;
         margin-top: 100px;
         position: relative;
         h2 {
            color: #fff;
            font-weight: 500;
            font-size: 2.5rem;
         }
         ul {
            margin-top: 2rem;
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
      .movie-comments {
         margin-top: 6rem;
         width: 912px;
         margin-left: auto;
         margin-right: auto;
         h2 {
            color: #fff;
            font-weight: 500;
            font-size: 2.5rem;
            text-align: center;
         }
         .text-place {
            margin-top: 2rem;
            background-color: ${ColorPallete.menuBackgroundColor};
            padding: 2rem 2rem;
            img {
               width: 40px;
               height: 40px;
            }
            .input-element {
               padding: 1rem;
               flex-grow: 2;
               position: relative;
               input {
                  padding: 1rem;
                  position: relative;
                  &:focus {
                     height: 90px;
                  }
                  &::placeholder {
                     font-family: Vazirmatn;
                     color: #000;
                  }
                  &.text {
                     position: absolute;
                     right: 1.5rem;
                     top: 1rem;
                  }
               }
               .telegram-icon {
                  background-color: rgba(0, 148, 148, 0.34);
                  position: absolute;
                  left: 1.5rem;
                  bottom: 1.5rem;
                  /* transform: translateY(-50%); */
                  width: 32px;
                  height: 32px;
                  span {
                     display: block;
                     width: 100%;
                     height: 100%;
                     position: relative;
                     svg {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                     }
                  }
               }
            }
         }
         #people-comments {
            li {
               align-items: center;
               margin-top: 2rem;
               background-color: ${ColorPallete.menuBackgroundColor};
               padding: 2rem 2rem;
               border-radius: 5px;
               .column1 {
                  gap: 1.5rem;
                  h2 {
                     font-weight: 400;
                     font-size: 1.5rem;
                     text-align: center;
                  }
                  img {
                     width: 36px;
                     height: 36px;
                  }
               }
               .column2 {
                  margin-right: 50px;
                  h2 {
                     margin-top: 1rem;
                     font-weight: 400;
                     font-size: 1.5rem;
                     text-align: right;
                  }
                  span {
                     display: block;
                     width: 100%;
                     height: 1px;
                     background-color: #fff;
                  }
               }
            }
         }
      }
   }
   svg {
      fill: #fff;
   }
`;
export default Style;
