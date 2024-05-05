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
      .content {
         ul {
            li {
               width: calc(12.5% - 13.3px);
               .content {
                  .img-holder {
                     height: auto;
                  }
               }
            }
         }
      }
   }
`;
export default Style;
