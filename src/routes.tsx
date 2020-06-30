import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom"
import MyLayout from './views/layout/MyLayout'
import GoodManage from "./views/goodManage/GoodManage";
import {isDef} from "./utils/shared";
import StoreManage from "./views/storeManage/StoreManage";
const routes = [
  {
    path: '/index',
    name: 'layout',
    component: MyLayout,
    redirect: '/index/good',
    children: [
      {
        path: '/index/good',
        name: '商品页面',
        component: GoodManage
      },
      {
        path: '/index/store',
        name: '商店管理',
        component: StoreManage
      }
    ]
  }
]

export function CustomRouter() {
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
  let {redirect} = route;

  return (
    <>
      <Route
        path={route.path}
        render={(props) => {
          return (<route.component {...props} routes={route.children} />);
        }}
      />
      {isDef(redirect) && <Redirect to={redirect}/>}
    </>
  );
}