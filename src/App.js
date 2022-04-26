import React, { useCallback, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  useNavigate,
  Outlet
} from "react-router-dom";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed]);
  const nav = useNavigate()
  const onClickMenu = useCallback(({ item, key }) => {
    nav(key)
  }, [nav])
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          onClick={onClickMenu}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/home',
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '/littleCode',
              icon: <VideoCameraOutlined />,
              label: '低代码页',
            },
            {
              icon: <UploadOutlined />,
              label: '权限管理',
              children: [
                {
                  key: '/accountManager',
                  icon: <UserOutlined />,
                  label: '角色管理',
                },
                {
                  key: '/roleManager',
                  icon: <VideoCameraOutlined />,
                  label: '账号管理',
                },
              ]
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;