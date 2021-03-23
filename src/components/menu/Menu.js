import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import { fetchRecipes } from "../../actions/index";
import SearchBar from "../search-bar";
import CardsContainer from "../card";
import MenuNav from "./MenuNav";
import "./Menu.scss";

class Menu extends Component {
  componentDidMount() {
    $("li").on("click", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  }

  onSubmit = (foodName) => {
    this.props.fetchRecipes(foodName);
  };

  menuSelection = (selection) => {
    this.props.fetchRecipes(selection);
  };

  render() {
    return (
      <React.Fragment>
        <div className="menu-wrapper">
          <h1 style={{ color: "rgb(8, 41, 47)" }}>Menu</h1>
          <MenuNav menuSelection={this.menuSelection} />
        </div>
        <SearchBar onSubmit={this.onSubmit} />
        <CardsContainer />
      </React.Fragment>
    );
  }
}

export default connect(null, { fetchRecipes })(Menu);
