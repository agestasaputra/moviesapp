import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, } from 'react-router-dom';
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './Redux/Store'

export default class App extends Component {
  render() {
    const { Header, Footer } = Layout;

    // const store = createStore(() => [], {}, applyMiddleware())
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout className="layout">
            {/* Header Section */}
            <Header>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1"> <Link to="/"> Home </Link></Menu.Item>
                <Menu.Item key="2"> <Link to="/about"> About </Link> </Menu.Item>
                <Menu.Item key="3"> <Link to="/contact"> Contact Us </Link> </Menu.Item>
              </Menu>
            </Header>

            {/* Content Section */}
            <Routes />

            {/* Footer Section */}
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}