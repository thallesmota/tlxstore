import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    button {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;
      text-align: center;
      padding: 14px 28px;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    thead {
      th {
        display: none;
      }
    }

    tbody {
      td {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
      }
    }
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

  padding: 30px;
  background: #fff;
  border-radius: 4px;
  margin-top: 40px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #293929;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2;

      &:hover {
        background: ${darken(0.03, "#2e342f")};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
