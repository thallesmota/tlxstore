import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    align-items: center;
    margin: 20px, 20px;
    flex-direction: column;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1224px) {
  }

  @media only screen and (min-width: 1824px) {
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 5px;
      color: #666;
      padding: 6px;
      width: 225px;
    }

    button {
      background: #293929;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      padding: 8px;
      margin-left: 5px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
