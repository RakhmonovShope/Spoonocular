import React, { Component } from "react";
import { connect } from "react-redux";

import TotalPrice from "./total-price";
import SuccessAlert from "../success-alert";
import { showCart, deleteCart } from "../../actions/index";
import "./User-Cart.scss";

class UserCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalSum: 0,
      showingAlert: false,
    };
  }

  componentDidMount() {
    this.props.showCart().then((res) => {
      if (res.status === 200 && Array.isArray(res.data)) {
        const userData = res.data
          .filter(
            (item) =>
              item.authentication === this.props.currentUser.authentication
          )
          .map((item) => ({ ...item, count: 1 }));
        const totalSum = this.getTotalSum(userData);
        this.setState({
          products: userData,
          totalSum,
        });
      }
    });
  }

  handleClickShowAlert(food) {
    this.props.deleteCart(food.id).then((res) => {
      if (res.status === 200) {
        this.setState({
          products: this.state.products.filter((item) => item.id !== food.id),
          showingAlert: true,
        });
      }
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 3000);
  }

  getTotalSum = (products) =>
    products.reduce(
      (accum, current) => accum + current.pricePerServing * current.count,
      0
    );

  renderUserCart = () => {
    if (this.props.cart.length === 0) {
      return <React.Fragment>You hav no orders</React.Fragment>;
    }
    return this.state.products.map((food, index) => {
      return (
        <tr key={index} className="product-cart-row">
          <td>
            <img
              src={food.image}
              alt={food.id}
              className="table-product-image"
            />
          </td>
          <td>
            <span className="table-product-title">{food.title}</span>
          </td>

          <td>
            <input
              className="table-product-input"
              type="number"
              min="1"
              max="40"
              value={food.count}
              onChange={(e) => {
                const newProducts = [...this.state.products];
                newProducts[index].count = e.target.value;
                this.setState({ products: newProducts });
              }}
            />
          </td>
          <td>
            <span className="table-product-tprice">
              ${(food.count * food.pricePerServing).toFixed(2)}
            </span>{" "}
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClickShowAlert(food)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div id="cart">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Sum</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderUserCart()}</tbody>
          </table>
        </div>
        <TotalPrice total={this.getTotalSum(this.state.products).toFixed(2)} />
        <SuccessAlert
          state={this.state.showingAlert}
          tittle="Successfully removed!!!"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.cart),
    currentUser: state.auth,
  };
};

export default connect(mapStateToProps, { showCart, deleteCart })(UserCart);
