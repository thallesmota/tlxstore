import { createGlobalStyle } from "styled-components";
import background from "../assets/images/background.png";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
/* #1e231e */

@import url('https://fonts.googleapis.com/css2?family=Roboto:400,700&display=swap');

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  body{
    background: #191920 ;
    -webkit-font-smoothing: antialiased;
  }

  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    background: #191920 ;
    -webkit-font-smoothing: antialiased;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    background: #191920 ;
    -webkit-font-smoothing: antialiased;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    background: #191920 ;
    -webkit-font-smoothing: antialiased;
  }

  @media only screen and (min-width: 1224px) {
  }

  @media only screen and (min-width: 1824px) {
  }

  *{
    margin: 0px;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor: pointer;
  }

`;
