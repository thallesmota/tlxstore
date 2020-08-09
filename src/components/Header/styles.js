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
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  flex-direction: column;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    flex-direction: column;
    display: flex;

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
