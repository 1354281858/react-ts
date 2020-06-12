import "./Layout.scss";
import React from "react";
import {
  Layout,
  Menu
} from "antd";
import {Link, Route, Switch} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default function MyLayout({routes}: any) {
  return (
    <>
      <Layout style={{height: '100vh'}}>
        <Sider>
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="3" title="切换页面">
              <Menu.Item key="3"><Link to={'/index/page1'}>Page1</Link></Menu.Item>
              <Menu.Item key="4"><Link to={'/index/page2'}>Page2</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}/>
          <Content style={{margin: '0 16px'}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
              <Switch>
                {routes.map((item: any, index: number) => {
                  return (
                    <Route
                      path={item.path}
                      key={index + 1 + ''}
                    >{<item.component/>}</Route>
                  )
                })}
              </Switch>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Weybn React Test @2020-06-11</Footer>
        </Layout>
      </Layout>
    </>
  );
}