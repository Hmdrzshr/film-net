import styled from "styled-components";

export const Style = styled.div`
    .footer {
        background-color: #363636;
        padding-top: 10px;
        font-size: 1.1rem;
        .info {
            .logo a {
                display: block;
                width: 213px;
                height: auto;
            }
            .menu {
                gap: 85px;
            }
            .get-app {
                span {
                    width: 28px;
                    height: 28px;
                }
            }
        }
        .social-media {
            border-bottom: 1px solid #5e5e5e;
            padding: 20px 0;
            line-height: 10px;
            .go-top a {
                display: block;
                padding: 7px 7px 3px 7px;
                border: 1px solid #fff;
                border-radius: 5px;
            }
            .media {
                border: 1px solid #fff;
                border-radius: 5px;
                a {
                    padding: 4px 16px;
                    border-right: 1px solid #fff;
                    margin: 5px 0;
                    &:nth-child(1) {
                        border-right: none;
                    }
                    img {
                        display: block;
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
        .copyright {
            .text {
                color: #8a8d8f;
                padding: 10px 0;
                font-size: 1.2rem;
            }
            .certificates {
                .icon {
                    margin: 20px 8px;
                    a {
                        img {
                            width: 48px;
                            height: 48px;
                        }
                    }
                }
            }
        }
    }
`;
export default Style;
