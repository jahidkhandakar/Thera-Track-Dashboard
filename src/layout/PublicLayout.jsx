import React from 'react';
import { Layout, Typography } from 'antd';
import logo from '../../public/image/logo.png';
import logo1 from '../../public/image/logo1.png';
import './PublicLayout.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const PublicLayout = ({ children }) => {
  return (
    <Layout className="public-layout">
      <Header className="public-header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <img src={logo1} alt="Logo" className="logo-text" />
        </div>
        <Title level={3} className="company-name">Cheeky Charting</Title>
      </Header>
      <Content className="public-content">
        {children}
      </Content>
    </Layout>
  );
};

export default PublicLayout;