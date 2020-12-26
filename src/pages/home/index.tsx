import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import HeaderView from './components/headerView';
import LeftSide from './components/leftSide';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <HeaderView />
      <Layout>
        <LeftSide />
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
