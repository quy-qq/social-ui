import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets';
import config from '../../../config';
import { Menu, Image } from 'antd';
import { MenuItemGroupProps } from 'antd/es/menu';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useState} from "react"
import { LoginOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];
const cx = classNames.bind(styles)


function HeaderPage() {
    const userInfoRedux = useSelector((state:any) => state.auth.userInfo);
    const isLoggedIn = !!userInfoRedux;
    const items: MenuItem[] = [
  {
    key: '1',
    label: <Link to="/">Trang chủ</Link>,
  },
  {
    key: '2',
    label: <Link to="/friend">Bạn Bè</Link>,
  },
  {
    key: '3',
    label: <Link to="/marketplace">Chợ</Link>,
  },
  {
    key: '4',
    label: <Link to="/watch">Video</Link>,
  },
  {
    key: '5',
    label: <Link to="/group">Nhóm</Link>,
  },
];

const itemss: MenuItem[] =  isLoggedIn ?([
 
     {
    key: '1',
    label: <Link to="/messenger">Tin nhắn</Link>,
  },
    {
    key: '2',
    label: <Link to="/notification">Thông báo</Link>,
  },
  {  
    key: '3',
    label: <img className={cx("avatar")} src={userInfoRedux.avatar}/>
  }
]):([{
    key: '2',
    label: <Link to="/login"><LoginOutlined  style={{fontSize:25 }}
      />  Đăng nhập</Link>,
  }]);
    return ( 
      <div className={cx('wrapper')}>
        <div
        style={{
          float: 'left',
            height: 60,
            width:'30%',
        }}
      >
          <Image
              alt="example"
              style={{ height: "60px",width:"60px",top:0}}
              src={images.logo}
            />
        </div>
        <div style={{width:'30%', display: 'flex', justifyContent: 'space-around' }}>
        <Menu
        style={{width: '100%'}}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
          items={items}
          >
          </Menu>
        </div>
        <div style={{width:'30%',display: 'flex', justifyContent: 'center' }}>
         <Menu
        style={{width: '100%'}}
        theme="light"
        mode="horizontal"
            defaultSelectedKeys={['1']}
            items={itemss}
     
          >
            </Menu>
        </div>
      </div>
    );
}

export default HeaderPage;