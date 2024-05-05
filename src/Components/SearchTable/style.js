import styled from "styled-components";

export const Style = styled.div`
   .table {
      background-color: #292929;
      padding: 15px;
      margin-bottom: 4rem;
      .items {
         color: #fff;
         font-size: 1.35rem;
         ul {
            li {
               padding-top: 10px;
               padding-bottom: 10px;
               background-color: rgba(255, 255, 255, 0.15);
               &:hover {
                  cursor: pointer;
                  background-color: rgba(255, 255, 255, 0.2);
               }
            }
         }
      }
      .search-line {
         margin-top: 50px;
         .input-box {
            flex-grow: 1;
            height: 4rem;
            input {
               width: 100%;
               &::placeholder {
                  color: #939393;
                  font-family: Vazirmatn;
               }
            }
         }
         .ant-input-suffix {
            color: #939393;
         }
         .delete-filters {
            h3 {
               font-size: 1.4rem;
               padding: 1rem 2rem;
            }
         }
      }
   }
`;
export default Style;
