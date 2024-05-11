import styled from "styled-components";
import ColorPallete from "../../AboutStyle/colorPallete";

export const Style = styled.div`
   #header {
      background-image: none;
   }
   .not-found {
      background-color: ${ColorPallete.pageBackgroundColor};
      color: ${ColorPallete.white};
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 5rem;
      .img-holder {
         margin-left: auto;
         margin-right: auto;
         width: 546px;
         height: 233px;
      }
      h1 {
         margin-top: 4rem;
         font-size: 3rem;
         font-weight: 500;
      }
      h2 {
         margin-top: 2rem;
         font-size: 1.9rem;
         font-weight: 400;
      }
      a {
         margin-top: 5rem;
         display: inline-block;
         h3 {
            display: inline-block;
            font-size: 1.8rem;
            font-weight: 400;
            padding: 0 5rem;
         }
      }
   }
   .dynamic-footer {
      display: flex;
   }
   .footer {
      display: none;
   }
`;
export default Style;
