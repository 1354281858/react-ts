import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom"
import MyLayout from './views/layout/MyLayout'
import Page1 from "./views/page1/Page1";
import Page2 from "./views/page2/Page2";
import Login from "./views/login/Login";

const routes = [
  {
    path: '/index',
    name: 'layout',
    component: MyLayout,
    children: [
      {
        path: '/index/page1',
        name: 'page1',
        component: Page1
      },
      {
        path: '/index/page2',
        name: 'page2',
        component: Page2
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export function CustomRouter(props: any) {
  return (
    <HashRouter>
      <Switch>
        {routes.map((item, index) => (
          <RouteWithSubRoutes route={item} key={index + 1 + ''}/>
        ))}
      </Switch>
    </HashRouter>
  );
}

function RouteWithSubRoutes({route}: any) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (<route.component {...props} routes={route.children} />);
      }}
    />
  );
}