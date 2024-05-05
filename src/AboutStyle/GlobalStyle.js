import { createGlobalStyle } from "styled-components";
import ColorPallete, { textColor } from "./colorPallete";

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
    color: #fff;
}
.container {
    max-width:1260px;
    margin-left:auto;
    margin-right:auto;
    padding-right:5px;
    padding-left:5px;
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
    width:4.167%;
}
.col-2 {
    width: 8.33%;
}

.col-3 {
    width:12.5%;
}

.col-4 {
    width:16.66%;
}

.col-5 {
    width:20.83%;
}

.col-6 {
    width:25%;
}

.col-7 {
    width:29.16%;
}

.col-8 {
    width:33.33%;
}

.col-9 {
    width:37.5%;
}

.col-10 {
    width:41.66%;
}

.col-11 {
    width:45.83%;
}

.col-12 {
    width:50%;
}
.col-13 {
    width:54.16%;
}
.col-14 {
    width: 58.33%;
}

.col-15 {
    width: 62.6%;
}

.col-16 {
    width:66.66%;
}

.col-17 {
    width:70.83%;
}

.col-18 {
    width:75%;
}

.col-19 {
    width:79.16%;
}

.col-20 {
    width:83.33%;
}

.col-21 {
    width:87.5%;
}

.col-22 {
    width:91.66%;
}

.col-23 {
    width:95.83%;
}

.col-24 {
    width:100%;
}
.d-flex {
    display:flex;
}
.row {
    flex-direction: row;
}
.column {
    flex-direction: column;
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
.wrap {
    flex-wrap: wrap;
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
.gap-35 {
    gap:35px;
}
.gap-40 {
    gap:40px;
}
.gap-45 {
    gap:45px;
}
.gap-50 {
    gap:50px;
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
    
}
.mini-radius {
        border-radius:5px;
    }
.medium-radius {
        border-radius:10px;
    }
.full-radius {
        border-radius:50%;
    }
.underlined {
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
         width: 100%;
        height: 1px;
        background: #a9233b;
        opacity: 0;
        }
    &:hover:before {
        opacity: 1;
    }
}
.item-color-1 {
    color : ${textColor.item1}
}
.disable {
    background-color:${ColorPallete.buttonDisable};
    color:${textColor.disabledItem};
    cursor: default;
}
.hover-background {
    background-color : ${ColorPallete.pageBackgroundColor};
}
`;
export default GlobalStyle;
