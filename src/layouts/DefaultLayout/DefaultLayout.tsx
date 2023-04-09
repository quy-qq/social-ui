import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import HeaderPage from "../components/Header/Header";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SidebarLeft from "../components/SidebarLeft/SidebarLeft";
import SidebarRight from '../components/SidebarRight/SidebarRight';
import Sider from 'antd/es/layout/Sider';
const cx = classNames.bind(styles)
const { Header, Content, Footer } = Layout;
function DefaultLayout({children}:any) {
   const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
            <Header style={{ width: '100%', background:'#ffff',height:'68px' }}>
                     <HeaderPage/>
            </Header>
            <Layout className="site-layout">
              <Sider style={{
                    height: '100vh',
                    background: colorBgContainer,
                    overflow: 'auto',
                    position: 'fixed',
                    left: 0,
                    top: 100,
                    bottom: 0,
                            }}>
                              <SidebarLeft />
              </Sider>
              <Content     
                 style={{
                       display:"absolute",
                       background: colorBgContainer,
                       }}>
                        {children}
              </Content>
              <Sider style={{
                        background: colorBgContainer,
                        overflow: 'auto',
                        position: 'fixed',
                        right: 0,
                        top: 100,
                        bottom: 0,
                            }}>
                              <SidebarRight />
              </Sider>
            </Layout>
            {/* <Footer>footer</Footer> */}
      </Layout>
        );
}

export default DefaultLayout;