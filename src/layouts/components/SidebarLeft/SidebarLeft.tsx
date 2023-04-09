import { Menu, MenuProps } from "antd";
import classNames from 'classnames/bind';
import styles from './SidebarRight.module.scss';
import TopUser from "../../../components/TopUser/TopUser";
const cx = classNames.bind(styles)

type MenuItem = Required<MenuProps>['items'][number];

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
    getItem('Bạn bè', '1'),
    getItem('Nhóm', '2'),
    getItem('MarketPlace', '3'),
    getItem('Chiến dịch gây quỹ', '4'),
    getItem('Đợt đặt hàng', '5'),
];
function SidebarLeft() {
    return ( 
    <div className={cx("wrapper")}>
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
        items={items}
        />
        <div className={cx("line")}></div>
        <div className={cx("top-users")}>
        <p>Members nổi bật</p>
        <div className={cx('list-user')}><TopUser/></div>
        </div>
            
    </div>
    );
}

export default SidebarLeft;
