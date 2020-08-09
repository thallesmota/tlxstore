import React from "react";
import { connect } from "react-redux";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdSearch } from "react-icons/md";

function Header({ cartSize }) {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={logo} width="200px" alt="tlxStore" />
        </Link>

        <div>
          <input />
          <button>
            <MdSearch size={20} color="#FFF" />
          </button>
        </div>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    </div>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
