import styled from "styled-components";

export const Style = styled.div`
   .home-page-hero {
      ul {
         min-height: 700px;
         position: relative;
         li {
            width: 100%;
            height: 100%;
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
               background-color: #1c1c1c;
               height: 100%;
               height: 100%;
               .hero-content {
                  width: 100%;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  font-size: 1.7rem;
                  .line-1 {
                     .title {
                        a {
                           color: #fff;
                        }
                     }
                     .time {
                        font-size: 1.5rem;
                        a {
                           color: #000;
                           background-color: rgb(237, 237, 237);
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
