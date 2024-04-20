import styled from "styled-components";

export const Style = styled.div`
   .movie-render-by-title {
      ul {
         display: flex;
         li {
            width: 200px;
            height: 200px;
            flex-shrink: 0;
            position: relative;
            div {
               width: 100%;
               height: 100%;
               background-color: gray;
            }
            h2 {
               position: absolute;
               right: 0;
               top: 0;
            }
         }
      }
   }
`;
export default Style;
