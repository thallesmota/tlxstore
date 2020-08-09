import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  searchSkin = () => {
    console.log("Sua skin:", this.state.inputValue);
  };

  render() {
    return (
      <div>
        <Container>
          <Link to="/">
            <img src={logo} width="200px" alt="tlxStore" />
          </Link>

          <Cart to="/cart">
            <div>
              <MdShoppingBasket size={32} color="#FFF" />
              <strong>Meu carrinho</strong>
              <span> ({this.props.cartSize} itens)</span>
            </div>
          </Cart>
        </Container>
      </div>
    );
  }
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
