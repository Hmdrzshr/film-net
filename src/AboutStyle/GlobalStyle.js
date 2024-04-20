import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    font-size:10px;
}
body {
    margin:0;
    direction:rtl;
    font-family: Vazirmatn;
    overflow-x: hidden;
}
*,
*:before,
*:after {
    box-sizing:border-box;
}
ul,
ol {
    margin:0;
    padding:0;
    list-style: none;
}
a {
    text-decoration: none;
    color: #cfcfcf;
}
h1,
h2,
h3,
h4,
h5,
h6
p {
    padding:0;
    margin:0;
}
img {
    width: 100%;
    height: 100%;
}
.col-1 {
    width:8.33%;
}
.col-2 {
    width: 16.66%;
}

.col-3 {
    width:25%;
}

.col-4 {
    width:33.33%;
}

.col-5 {
    width:41.66%;
}

.col-6 {
    width:50%;
}

.col-7 {
    width:58.33%;
}

.col-8 {
    width:66.66%;
}

.col-9 {
    width:75%;
}

.col-10 {
    width:83.33%;
}

.col-11 {
    width:91.66%;
}

.col-12 {
    width:100%;
}
.d-flex {
    display:flex;
}
.j-center {
    justify-content:center;
}
.j-between {
    justify-content: space-between;
}
.align-center {
    align-items:center;
}
.gap-5 {
    gap:5px;
}
.gap-10 {
    gap:10px;
}
.gap-15 {
    gap:15px;
}
.gap-20 {
    gap:20px;
}
.gap-25 {
    gap:25px;
}
.gap-30 {
    gap:30px;
}
.button {
    padding:5px 15px;
    &.white {
        color:#1C1C1C;
        background:rgb(237,237,237);
        &:hover{
            background:#CFCFCF;
        }
    }
    &.gray {
        color:#fff;
        background:rgba(143,143,143,0.5);
        &:hover{
            background:rgba(143,143,143,0.4);
        }}
    &.red {
        color:#fff;
        background:rgb(212,43,77);
        &:hover{
            background:rgb(169,35,59);;
        }}
    &.mini-radius {
        border-radius:5px;
    }
    &.full-radius {
        border-radius:50%;
    }
}
.container {
    max-width:1260px;
    margin-left:auto;
    margin-right:auto;
    padding-right:5px;
    padding-left:5px;
}
`;
export default GlobalStyle;
