import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');
      body{
          font-family: 'Plus Jakarta Sans', sans-serif;
      }
  `;

const colors = {
  "blue-maximum": "#B5B3E6",
  "blue-violet": "#7A75D1",
  "blue-ocean": "#4E47C2",
  "blue-cobalt": "#343090",
  "blue-faux": "#292772",
  "red-candy-apple": "#FF1010",
  "yellow-faux": "#FAC736",
  "pink-sasquatch": "#FAC736",
  "blue-faux-picton": "#44C2FD",
  "light-silver": "#D8D8D8",
  "philippine-grey": "#8C8C8C",
  "davys-grey": "#555555",
  "faux-olive-grey": "#404040",
  "faux-smoky-grey": "#0D0D0D",
};

const fontSize = {
  heading1: "55px",
  heading2: "42px",
  heading3: "34px",
  heading4: "26px",
  heading5: "21px",
  heading6: "16px",
  body: "16px",
  "body-small": "13px",
  "extra-small": "10px",
};

export { colors, fontSize, GlobalStyle };

//esqueletonCard
