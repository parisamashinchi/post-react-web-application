import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import asyncComponent from "../containers/AsyncComponent";
import createHistory from 'history/createBrowserHistory';

import '../App.css';
export const history = createHistory();
const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            <Component {...props} />
        }
    />
);
const PublicRoutes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={"/authentication"}
                    component={asyncComponent(() => import("../components/authentication/Authentication"))}
                />
                <Route
                    exact
                    path={"/"}
                    component={asyncComponent(() => import("../components/LandingPage"))}
                />

                <RestrictedRoute
                    path={"/dashboard"}
                    component={asyncComponent(() => import("../components/dashboard/Dashboard"))}
                />

                {/*<Route*/}
                {/*    path={routes.ROUTE_NON}*/}
                {/*    component={asyncComponent(() => import("pages/error/404"))}*/}
                {/*/>*/}

            </Switch>
        </Router>
    );
};

 // export default PublicRoutes
export default connect(
    state => ({
        // isLoggedIn: state.getIn([constants.USER, "data", "access_token"], null) !== null,
    }),
    null
)(PublicRoutes);

