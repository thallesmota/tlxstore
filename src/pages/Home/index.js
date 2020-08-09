import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList, Container } from "./styles";
import { MdAddShoppingCart, MdSearch } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";

class Home extends Component {
  state = {
    products: [],
    inputValue: "",
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { products, inputValue } = this.state;
    const { amount } = this.props;

    const filteredSkins = products.filter((products) => {
      return (
        products.title.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <Container>
          <MdSearch size={30} color="#FFF" />
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Procure sua skin..."
          />
        </Container>

        <ProductList>
          {filteredSkins.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                onClick={() => this.handleAddProduct(product)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[product.id] || 0}
                </div>
                <span> ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
