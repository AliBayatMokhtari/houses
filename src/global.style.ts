import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   html, body {
      font-family: Open-Sans;
      font-size: 12px;
      line-height: 1.5;
   }

   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Open-Sans;
   }

   h1, h2, h3, h4, h5, h6 {
      font-family: Montserrat;
      font-weight: bold;
   }

   h1 {
      font-size: 18px;
   }

   h2 {
      font-size: 14px;
   }

   @media(min-width: 1024px){
      html, body {
         font-size: 18px;
      }
   }
`;
