import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout } from "antd";
import classNames from "classnames";

import { MAIN_ROUTES, AUTH_ROUTES } from "../../constants/routes";
import Header from "../../components/Header";
import PrivateRoute from "../../components/PrivateRoute";

import * as budgetAction from "../../actions/budget";
import * as currencyAction from "../../actions/currency";

const { Content } = Layout;

const showPrivateRoute = (routes) => {
  return routes.map((route, index) => (
    <PrivateRoute
      key={index}
      path={route.path}
      name={route.name}
      exact
      component={route.component}
    />
  ));
};

const showPublicRoute = (routes) => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      name={route.name}
      exact
      component={route.component}
    />
  ));
};

function LayoutPage(props) {
  const { auth, budgetActionCreators, currencyActionCreators } = props;
  const { getBudget } = budgetActionCreators;
  const { getCurrency } = currencyActionCreators;

  useEffect(() => {
    getBudget();
    getCurrency();
  }, []);

  return (
    <Layout>
      {auth.isAuth && <Header />}
      <Content className={classNames({ "content-main-route": auth.isAuth })}>
        <Layout className={classNames({ "layout-main-route": auth.isAuth })}>
          <Switch>
            {showPrivateRoute(MAIN_ROUTES)}
            {!auth.isAuth ? (
              showPublicRoute(AUTH_ROUTES)
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )}
          </Switch>
        </Layout>
      </Content>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    budgetActionCreators: bindActionCreators(budgetAction, dispatch),
    currencyActionCreators: bindActionCreators(currencyAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);