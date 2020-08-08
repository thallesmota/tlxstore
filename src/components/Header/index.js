import React from "react";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

export default function index() {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={logo} width="250px" alt="tlxStore" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>03 itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    </div>
  );
}
