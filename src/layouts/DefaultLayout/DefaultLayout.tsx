import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import HeaderPage from "../components/Header/Header";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SidebarLeft from "../components/SidebarLeft/SidebarLeft";
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import config from '../../config';

const cx = classNames.bind(styles)
const { Header, Content, Footer } = Layout;
function DefaultLayout({children}:any) {
      const navigate = useNavigate();
    useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      navigate(config.routes.login);
    }
    }, [navigate]);
   const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
            <Header className="header" style={{ width: '100%', background:'#ffff',height:'68px' }}>
                     <HeaderPage/>
            </Header>
              <Layout>
              <Sider  width={200} style={{
                    background: colorBgContainer,
                            }}>
                              <SidebarLeft />
              </Sider>
               <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
             {children} 
          </Content>
        </Layout>
              {/* <Content     
                 style={{
                       background: colorBgContainer,
                       }}>
                        {children}
              </Content> */}
            {/* <Footer>footer</Footer> */}
            </Layout>
      </Layout>
        );
}

export default DefaultLayout;