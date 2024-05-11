import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   .header {
      background-image: none;
      background-color: ${ColorPallete.pageBackgroundColor};
   }
   .all-movies {
      background-color: ${ColorPallete.pageBackgroundColor};
      padding-top: 10rem;

      padding-bottom: 10rem;
      .all-movies-content {
         ul.slide-of-movies {
            li {
               width: calc(12.5% - 14px);
               height: 200px;
               overflow: hidden;
               flex-shrink: 0;
               .content {
                  position: relative;
                  width: 100%;
                  height: 100%;
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
                  .content .img-holder:before,
                  .content .item-content {
                     opacity: 1;
                  }
               }
            }
         }
      }
   }
   .pagination-part {
      margin-top: 4rem;

      ul {
         li.ant-pagination-next,
         li.ant-pagination-prev {
            transform: rotate(180deg);
         }
      }
      .ant-pagination-item-active {
         font-weight: 600 !important;
         color: ${ColorPallete.white}!important;
         background-color: ${ColorPallete.menuBackgroundColor}!important;
         border-color: ${ColorPallete.menuBackgroundColor}!important;
         a {
            color: ${ColorPallete.white}!important;
         }
      }
   }
   .free-answer {
      font-size: 3rem;
      font-weight: 500;
      color: ${ColorPallete.white};
      text-align: center;
      margin: 0 auto;
   }
`;
export default Style;
