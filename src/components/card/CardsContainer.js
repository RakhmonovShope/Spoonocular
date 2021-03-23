import React from "react";
import { connect } from "react-redux";

import { fetchRecipes } from "../../actions/index";
import Cards from "./Cards";
import "./Cards.scss";

class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes(" ");
  }

  render() {
    return (
      <div className="container-fluid card-wrapper">
        <div className="container">
          <h1 className="text-center py-3 recipe-tittle">dishes of Week</h1>
          <div className="row justify-content-center">
            <Cards recipes={this.props.recipes} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps, { fetchRecipes })(CardsContainer);
