import React from 'react'
import { Layout, Menu, ConfigProvider } from 'antd'
import { Route, Link } from 'react-router-dom'
// import zh_CN from 'antd/lib/locale-provider/zh_CN'

import Employee from './employee'
import Setting from './setting'
import './App.css'

const { Header, Content, Footer } = Layout

const App = ({ match }: any) => {
  let defaultKey = match.url.replace('/', '') || 'employee'
  return (
    <ConfigProvider>
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
            className="menu"
          >
            <Menu.Item key="employee">
              <Link to="/employee"></Link>员工管理
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to="/setting"></Link>系统设置
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path="/" exact component={Employee}></Route>
            <Route path="/employee" component={Employee}></Route>
            <Route path="/setting" component={Setting}></Route>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} className="footer">
          TypeScript in Action
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
