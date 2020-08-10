import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./reset.css";
import "./app.css";


import MainPage from "./main/main_page.jsx";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import CalculatorsContainer from './calculator/fire_calcs_container';
import AllPostIndexContainer from './post/post_index/all_post_index_container';
import BudgetContainer from './budget/budget.jsx'

import ShowPostContainer from './post/show_post/show_post_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/budget" component={BudgetContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/calculators"
        component={CalculatorsContainer}
      />
      <ProtectedRoute exact path="/posts" component={AllPostIndexContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={ShowPostContainer} />

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
