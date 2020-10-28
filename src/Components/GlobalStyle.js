import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
body{
    ${reset}
    @font-face {
  font-family: NotoSansCJKkr;
  src: local(NotoSansCJKkr-Bold),
    url(/path/to/NotoSansCJKkr-Bold.woff2) format("woff2"),
    url(/path/to/NotoSansCJKkr-Bold.woff) format("woff"),
    url(/path/to/NotoSansCJKkr-Bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
} 
   width:100%;
   margin:40px 0 0 0;
   box-sizing:border-box
}`;

export default globalStyle;
