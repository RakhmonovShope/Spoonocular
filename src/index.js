import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import history from "./history";

import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import LocationPage from "./components/location";
import reducers from "./reducers/index";
import MainPage from "./components/main";
import FullRecipeInfo from "./components/recipe-full-info";
import Menu from "./components/menu";
import UserCartContainer from "./components/user-cart";
import Contact from "./components/contact";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {
    auth: {
      authentication: localStorage.getItem("token"),
      name: localStorage.getItem("name"),
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/location" exact component={LocationPage} />
          <Route path="/usercart" exact component={UserCartContainer} />
          <Route path="/recipe/:id" exact component={FullRecipeInfo} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
