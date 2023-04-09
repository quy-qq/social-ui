import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets';
import config from '../../../config';
import { Menu, Image, } from 'antd';
import { MenuItemGroupProps } from 'antd/es/menu';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];
const cx = classNames.bind(styles)

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Trang chủ', '1'),
    getItem('Bạn Bè', '2'),
    getItem('MarketPlace', '3'),
    getItem('Watch', '4'),
    getItem('Nhóm', '5'),
];

const itemss: MenuItem[] = [
    getItem('Tìm kiếm', '1'),
    getItem('Shopping Cart', '2'),
    getItem('Login', '3'),
 
];
function HeaderPage() {
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