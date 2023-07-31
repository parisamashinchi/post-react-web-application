import React, {Component} from "react";
import {Route} from "react-router-dom";
import asyncComponent from "../containers/AsyncComponent";

import '../App.css';
const privateRoutes = [
    {
        path: "/dashboard/profile",
        component: asyncComponent(() => import("../components/dashboard/profile/Profile")),
    },
    {
        path: "/dashboard/offer",
        component: asyncComponent(() => import("../components/dashboard/offer/Offer")),
    },
    {
        path: "/dashboard/request",
        component: asyncComponent(() => import("../components/dashboard/request/Request")),
    },
    {
        path: "/dashboard/record",
        component: asyncComponent(() => import("../components/dashboard/record/Record")),
    },
    {
        path: "/dashboard/setting",
        component: asyncComponent(() => import("../components/dashboard/setting/Setting")),
    },
];


class AppRouter extends Component {
    render() {
        const {style} = this.props;
        return (
            <div style={style}>
                {privateRoutes.map(singleRoute => {
                    const {path, exact, ...otherProps} = singleRoute;
                    console.log(singleRoute, 'he')
                    return (
                        <Route
                            exact={exact === false ? false : true}
                            key={singleRoute.path}
                            path={singleRoute.path}
                            {...otherProps}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AppRouter;

