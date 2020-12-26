import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import './style.less';

const { Header, Footer, Sider, Content } = Layout;

export default function HeaderView() {
  return (
    <Header className="header">
      <Row>
        <Col span={8} offset={8}>dwewe</Col>
      </Row>
    </Header>
  )
}