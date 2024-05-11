import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   /* .movie-render-by-title {
      h2 {
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
   } */
`;
export default Style;
