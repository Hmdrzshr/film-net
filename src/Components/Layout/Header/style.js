import styled from "styled-components";

export const Style = styled.div`
    .header {
        background: #000;
        font-size: 1.2rem;
        padding: 7px 0;
        .logo {
            padding: 10px 15px;
        }
        .menu {
            a {
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -13px;
                    width: 100%;
                    height: 1px;
                    background: #a9233b;
                    opacity: 0;
                }
                &:hover:before {
                    opacity: 1;
                }
                i {
                    font-size: 6px;
                }
            }
        }
        .login {
            .search {
                .search-holder {
                    width: 24px;
                    height: 24px;
                }
            }
            .profile {
                .pro-holder {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }
`;
export default Style;
